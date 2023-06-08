import { motion, AnimatePresence } from "framer-motion";
import { X } from "../Icons";

export type Modal = StyleableWithChildren & {
  open?: boolean;
  onClose?: () => void;
  title?: string;
};

export function Backdrop({
  open,
  onClose,
  className
}: {
  open?: boolean;
  onClose?: () => void;
  className?: string;
}) {
  return (
    <motion.div
      className={classes(
        "absolute inset-0 z-50 flex items-center justify-center",
        className
      )}
      variants={outSideVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      exit="closed"
      onClick={onClose}
    >
      <motion.div
        onClick={onClose}
        className="fixed inset-0 bg-zinc-900 bg-opacity-40"
      />
    </motion.div>
  );
}

export function Modal({ open, onClose, className, children, title }: Modal) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <Backdrop open={open} onClose={onClose} />

          <motion.div
            className={classes(
              "pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center"
            )}
            variants={insideVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            exit="closed"
          >
            <div
              className={classes(
                "bg-brand-amber-1 pointer-events-auto flex flex-col overflow-hidden rounded-xl",
                className
              )}
            >
              {title && (
                <div className="flex items-center justify-between border-b border-zinc-300 bg-white px-6 py-4 text-lg">
                  {title}
                  <button
                    className="text-black duration-100 hover:text-black/90"
                    onClick={onClose}
                  >
                    <X />
                  </button>
                </div>
              )}
              <div className="p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

const outSideVariants = {
  closed: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.1
    }
  },
  open: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.1
    }
  }
};

const insideVariants = {
  closed: {
    scale: 0.9,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 30,
      stiffness: 500,
      restSpeed: 10
    }
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 22,
      stiffness: 500,
      restSpeed: 0.1
    }
  }
};
