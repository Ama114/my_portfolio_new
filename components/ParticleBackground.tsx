"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
// 1. next-themes වලින් useTheme hook එක import කරගන්නවා
import { useTheme } from "next-themes";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // 2. දැනට තියෙන theme එක (dark/light) ලබා ගන්නවා
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration error වළක්වා ගැනීමට (Server එකේ සහ Client එකේ theme එක සමාන වන තුරු සිටීම)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // 3. Theme එක අනුව පාට තීරණය කිරීම
  // Dark mode නම් සුදු පාට (#ffffff), Light mode නම් කළු පාට (#000000)
  const particleColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            // 4. අපි උඩින් හදාගත්ත variable එක මෙතනට දානවා
            value: particleColor, 
          },
          links: {
            // 4. Links වලටත් ඒ පාටම දානවා
            color: particleColor, 
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}