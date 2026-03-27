import { useState, useEffect, useRef } from "react";

// ─── All timing values in one place ───
const INTRO_TIMING = {
  connectingDelay: 0,
  connectingDuration: 700,
  pauseDuration: 400,
  errorDelay: 1300,
  rebootDelay: 1800,
  dotAnimationInterval: 220,
  unfoldDelay: 3400,
  unfoldDuration: 900,
  hardStopDelay: 6000,
};

const IntroSequence = ({ children }: { children: React.ReactNode }) => {
  const [phase, setPhase] = useState<
    "connecting" | "pause" | "error" | "reboot" | "unfold" | "done"
  >("connecting");
  const [dots, setDots] = useState(0);
  const [rebootText, setRebootText] = useState(false);
  const dotsInterval = useRef<ReturnType<typeof setInterval>>();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const skip = () => {
    // Clear all pending timers so no phase overrides "done"
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (dotsInterval.current) clearInterval(dotsInterval.current);
    setPhase("done");
  };

  useEffect(() => {
    const handleKey = () => skip();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("pause"), INTRO_TIMING.connectingDuration);
    const t2 = setTimeout(() => setPhase("error"), INTRO_TIMING.errorDelay);
    const t3 = setTimeout(() => {
      setPhase("reboot");
      let d = 0;
      dotsInterval.current = setInterval(() => {
        d++;
        setDots(d);
        if (d >= 3) {
          clearInterval(dotsInterval.current);
          setTimeout(() => setRebootText(true), 3000);
        }
      }, INTRO_TIMING.dotAnimationInterval);
    }, INTRO_TIMING.rebootDelay);
    const t4 = setTimeout(() => setPhase("unfold"), INTRO_TIMING.unfoldDelay);
    const t5 = setTimeout(
      () => setPhase("done"),
      INTRO_TIMING.unfoldDelay + INTRO_TIMING.unfoldDuration + 100
    );

    timers.current = [t1, t2, t3, t4, t5];

    return () => {
      timers.current.forEach(clearTimeout);
      if (dotsInterval.current) clearInterval(dotsInterval.current);
    };
  }, []);

  const isDone = phase === "done";

  return (
    <>
      {/* Real page renders underneath */}
      <div style={{ visibility: isDone || phase === "unfold" ? "visible" : "hidden" }}>
        {children}
      </div>

      {/* Overlay */}
      {!isDone && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer"
          onClick={skip}
          onDoubleClick={skip}
          style={{ perspective: "1500px", pointerEvents: phase === "unfold" ? "none" : "auto" }}
        >
          {/* Left half */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "inset(0 50% 0 0)",
              transformOrigin: "left center",
              transition: phase === "unfold"
                ? `transform ${INTRO_TIMING.unfoldDuration}ms ease-in-out`
                : undefined,
              transform: phase === "unfold" ? "rotateY(-90deg)" : "rotateY(0deg)",
              boxShadow: phase === "unfold" ? "4px 0 20px rgba(0,0,0,0.15)" : "none",
            }}
          />
          {/* Right half */}
          <div
            className="absolute inset-0 bg-white"
            style={{
              clipPath: "inset(0 0 0 50%)",
              transformOrigin: "right center",
              transition: phase === "unfold"
                ? `transform ${INTRO_TIMING.unfoldDuration}ms ease-in-out`
                : undefined,
              transform: phase === "unfold" ? "rotateY(90deg)" : "rotateY(0deg)",
              boxShadow: phase === "unfold" ? "-4px 0 20px rgba(0,0,0,0.15)" : "none",
            }}
          />

          {/* Text content (hides during unfold) */}
          {phase !== "unfold" && (
            <div
              className="relative z-10 text-center px-6"
              style={{ fontFamily: "'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace" }}
            >
              {/* Connecting */}
              <p
                className="text-sm sm:text-base text-gray-700 transition-opacity duration-500"
                style={{ opacity: 1 }}
              >
                Connecting to Julien at high speed...
                {(phase === "connecting") && (
                  <span className="inline-block ml-1 animate-pulse">▍</span>
                )}
              </p>

              {/* Error */}
              {(phase === "error" || phase === "reboot") && (
                <p className="mt-6 text-sm sm:text-base text-gray-900 font-semibold animate-fade-in">
                  ERROR: Boring generic blog not found.
                </p>
              )}

              {/* Reboot */}
              {phase === "reboot" && (
                <p className="mt-6 text-sm sm:text-base text-gray-600 animate-fade-in">
                  Rebooting to
                  {".".repeat(Math.min(dots, 3))}
                  {rebootText && (
                    <span className="ml-1">
                      whatever this is. <span className="text-gray-400">(Still figuring it out.)</span>
                    </span>
                  )}
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default IntroSequence;
