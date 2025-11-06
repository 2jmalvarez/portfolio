import { useEffect, useRef } from "react";

const palabrasNombre = [
  "ZyPhone",
  "javi",
  "hernan",
  "martin",
  "luciana",
  "natalia",
  "tomas",
  "juan",
  "javi",
  "hernan",
  "martin",
  "luciana",
  "natalia",
  "tomas",
  "juan",
];

export function MatrixBackground({
  timeout = 50,
  background = "#000000",
  color = "#0f0",
  palabras = palabrasNombre,
  iniPalabras = false,
  xPosicionPalabra = 100,
  yPosicionPalabra = 200,
}) {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvas.current) return;
    const context = canvas.current.getContext("2d");

    if (!context) return;

    const width = document.body.offsetWidth;
    const height = document.body.offsetHeight;
    canvas.current.width = width;
    canvas.current.height = height;

    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    const columns = Math.floor(width / 20) + 1;
    const yPositions = Array.from({ length: columns }).fill(0);

    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    const matrixEffect = () => {
      context.fillStyle = background + "11";
      context.fillRect(0, 0, width, height);

      context.fillStyle = color;
      context.font = "15pt monospace";

      yPositions.forEach((yy, index) => {
        const y = typeof yy == "number" ? yy : 0;

        let text = String.fromCharCode(
          Math.floor(Math.random() * (126 - 33) + 33)
        );
        // text = "";

        const x = index * 20;

        if (iniPalabras) {
          yPosicionPalabra = 80;
          xPosicionPalabra = 20;

          palabras.forEach((palabra, i) => {
            if (x == xPosicionPalabra + i * 20)
              for (let Index = 0; Index < palabra.length; Index++)
                if (y == yPosicionPalabra + Index * 20) {
                  text = palabra[Index];
                }
          });
        } else {
          if (new Date().getSeconds() % 5 == 0) {
            palabras.forEach((palabra, i) => {
              if (x == xPosicionPalabra + i * 20)
                for (let Index = 0; Index < palabra.length; Index++)
                  if (y == yPosicionPalabra + Index * 20) {
                    text = palabra[Index];
                  }
            });
          }
          xPosicionPalabra =
            new Date().getSeconds() % 15 == 0
              ? (xPosicionPalabra + Math.floor(Math.random() * 10) * 20) % 1200
              : xPosicionPalabra;
        }

        context.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    const interval = setInterval(matrixEffect, timeout);
    return () => {
      clearInterval(interval);
    };
  }, [canvas, timeout, palabras]);

  return (
    <div
      style={{
        background,
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: -1,
        left: "0",
        top: "0",
      }}
    >
      <canvas ref={canvas} />
    </div>
  );
}
