"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [radius, setRadius] = useState<number>(200);

  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Responsive radius adjustment
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(120);
      } else if (window.innerWidth < 768) {
        setRadius(160);
      } else {
        setRadius(200);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-zinc-100 bg-zinc-950/80 border-zinc-800";
      case "in-progress":
        return "text-black bg-zinc-100 border-zinc-300";
      case "pending":
        return "text-zinc-400 bg-zinc-950/40 border-zinc-900/50";
      default:
        return "text-zinc-400 bg-zinc-950/40 border-zinc-900/50";
    }
  };

  return (
    <div
      className="w-full h-[550px] sm:h-[620px] flex flex-col items-center justify-center bg-transparent overflow-visible relative select-none"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Glowing central core - brushed silver/chrome theme */}
          <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-zinc-100 via-zinc-400 to-zinc-800 animate-pulse flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            <div className="absolute w-18 h-18 rounded-full border border-white/10 animate-ping opacity-50"></div>
            <div
              className="absolute w-22 h-22 rounded-full border border-white/5 animate-ping opacity-30"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-6 h-6 rounded-full bg-zinc-950/90 backdrop-blur-md border border-white/10"></div>
          </div>

          {/* Dynamic responsive orbit ring */}
          <div 
            className="absolute rounded-full border border-white/5 pointer-events-none"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
            }}
          ></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.4 + 35}px`,
                    height: `${item.energy * 0.4 + 35}px`,
                    left: `-${(item.energy * 0.4 + 35 - 35) / 2}px`,
                    top: `-${(item.energy * 0.4 + 35 - 35) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-9 h-9 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-zinc-100 text-zinc-950"
                      : isRelated
                      ? "bg-zinc-800 text-zinc-100"
                      : "bg-zinc-950 text-zinc-400"
                  }
                  border 
                  ${
                    isExpanded
                      ? "border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-110"
                      : isRelated
                      ? "border-zinc-300 animate-pulse"
                      : "border-zinc-800/80 hover:border-zinc-700"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : "hover:scale-105"}
                `}
                >
                  <Icon size={14} />
                </div>

                <div
                  className={`
                  absolute top-11 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-sm font-mono tracking-wider uppercase
                  transition-all duration-300
                  ${isExpanded ? "text-zinc-100 scale-105 font-semibold" : "text-zinc-500"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-16 left-1/2 -translate-x-1/2 w-60 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 shadow-2xl shadow-black/80 overflow-visible z-[250]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-zinc-800"></div>
                    <CardHeader className="p-3 pb-1">
                      <div className="flex justify-between items-center">
                        <Badge
                          className={`px-1.5 py-0.5 text-[8px] font-mono tracking-wider rounded-md border ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "ACTIVE"
                            : item.status === "in-progress"
                            ? "GROWING"
                            : "PLANNED"}
                        </Badge>
                        <span className="text-[8px] font-mono text-zinc-600 uppercase">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-xs font-semibold font-satoshi text-zinc-100 mt-1.5 uppercase tracking-wide">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 pt-0 text-[10px] text-zinc-400 font-satoshi leading-relaxed">
                      <p>{item.content}</p>

                      <div className="mt-3 pt-2.5 border-t border-zinc-900">
                        <div className="flex justify-between items-center text-sm font-mono text-zinc-500 mb-1">
                          <span className="flex items-center">
                            <Zap size={8} className="mr-1 text-zinc-400 animate-pulse" />
                            Skill Level
                          </span>
                          <span className="font-mono text-zinc-300">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-zinc-600 to-zinc-300"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 pt-2.5 border-t border-zinc-900">
                          <div className="flex items-center mb-1.5">
                            <Link size={8} className="text-zinc-500 mr-1" />
                            <h4 className="text-[8px] uppercase tracking-wider font-mono text-zinc-500">
                              Connected Ecosystem
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-5 px-1.5 py-0 text-[8px] font-mono rounded-[4px] border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={6}
                                    className="ml-1 text-zinc-600"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
