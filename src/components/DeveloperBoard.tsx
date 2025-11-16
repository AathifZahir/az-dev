import { motion } from "framer-motion";

const DeveloperBoard = () => {
  return (
    <motion.div
      className="w-full max-w-md"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.2,
        type: "spring",
        stiffness: 100,
      }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl blur-[1px]"
          animate={{ rotate: [0, 6, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative bg-codebg border-[3px] border-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.1)]"
          whileHover={{
            y: -5,
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 40px rgba(59,130,246,0.15)",
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-red-500"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-yellow-500"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-green-500"
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <div className="text-xs text-gray-500">developer.js</div>
          </div>

          <div className="space-y-2 font-mono text-sm">
            <div className="text-gray-500">{"// Software Engineer"}</div>
            <div>
              <span className="text-pink-600">const</span>{" "}
              <span className="text-blue-600">developer</span>{" "}
              <span className="text-gray-500">=</span>{" "}
              <span className="text-orange-500">{"{"}</span>
            </div>
            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.3 }}
            >
              <span className="text-purple-600">name</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-green-600">'Aathif Zahir'</span>
              <span className="text-gray-500">,</span>
            </motion.div>

            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.3 }}
            >
              <span className="text-purple-600">skills</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-orange-500">[</span>
              <span className="text-green-600">'React'</span>
              <span className="text-gray-500">,</span>{" "}
              <span className="text-green-600">'Node.js'</span>
              <span className="text-gray-500">,</span>{" "}
              <span className="text-green-600">'Python'</span>
              <span className="text-orange-500">]</span>
              <span className="text-gray-500">,</span>
            </motion.div>

            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.3 }}
            >
              <span className="text-purple-600">focuses</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-orange-500">[</span>
              <span className="text-green-600">'Full-Stack'</span>
              <span className="text-gray-500">,</span>{" "}
              <span className="text-green-600">'UI/UX'</span>
              <span className="text-orange-500">]</span>
              <span className="text-gray-500">,</span>
            </motion.div>

            <motion.div
              className="pl-6"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.0, duration: 0.3 }}
            >
              <span className="text-purple-600">learning</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-green-600">'Always'</span>
            </motion.div>

            <div>
              <span className="text-orange-500">{"}"}</span>
              <span className="text-gray-500">;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DeveloperBoard;
