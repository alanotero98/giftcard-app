import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function GiftCard() {
const [moveDown, setMoveDown] = useState(false);
  const [showText, setShowText] = useState(false);

  // Se activa después de las entradas para mover hacia abajo
  useEffect(() => {
   let timers = [];

  const t1 = setTimeout(() => {
    setMoveDown(true);
    setShowText(true);
  }, 1800); // mover justo cuando se completan las dos animaciones (1s + 0.6s)


  timers.push(t1);
  return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-screen h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="w-full h-full flex flex-col items-center justify-center relative ">
        {/* Contenedor que se moverá hacia abajo */}
        <motion.div
            initial={{ scale: 1, x: "-50%", y: "-50%",skewX: 0 ,}}
            animate={moveDown
                ? {
                    x: "-80vw", // mueve a la izquierda
                    y: "4vh",  // baja
                    skewX:4,
                }
                : {
                    x: "-47%",
                    y: "-48%",
                    skewX: 0,
                }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 "
>
    {/* Contenedor para superposición */}
  <div className="relative w-[500px]  -mt-20 overflow-hidden">
          {/* Imagen del corazón */}
          <motion.img
            src="/corazon.png"
            alt="Corazón"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-[450px]   "
                      />

          {/* Tipografía */}
          <motion.img
            src="/tipografia.png"
            alt="Firma"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="absolute top-14 left-11 w-[360px] transform -translate-x-1/2 -translate-y-1/2"

/>
          </div>
        </motion.div>

        {/* Texto final */}
        {showText && (
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 2 }}
  className="absolute w-[80%] h-full top-36 text-black text-left ml-4"
>
  <motion.p
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0 }}
    className="text-[45px]  mb-1  "
     style={{ fontFamily: "AvantGardeDemi"}}
  >
    bien ahiiii
  </motion.p>

  <motion.p
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-[35px] leading-tight "
    style={{ fontFamily: "AvantGardeBook" }}
  >
    te regalaron un
  </motion.p>

  <motion.p
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="text-[35px] leading-tight"
    style={{ fontFamily: "AvantGardeBook" }}
  >
    tattoo mononx
  </motion.p>

  <motion.p
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 1 }}
    className="mt-7 text-[22px]"
    style={{ fontFamily: "AvantGardeBookOblique" }}
  >
    chiflame <a href="https://www.instagram.com/michelleagot/"><span style={{ fontFamily: "AvantGardeDemi" }}>@michelleagot</span></a>
  </motion.p>
</motion.div>

           
  )
}
</div>
    </motion.div>
  );
}
