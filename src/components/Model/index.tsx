import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Container from 'components/Container'

const Modal: React.FC<{ className?: string,active: boolean; toggleActive: VoidFunction }> = ({
  children,
  active,
  toggleActive,
  className
}) => {
  const modalContent = useRef<HTMLInputElement>(null)

  const clickOutsideContent = (e: MouseEvent) => {
    if (
      modalContent.current &&
      active &&
      !modalContent.current.contains(e.target as Node)
    ) {
      toggleActive()
    }
  }

  document.addEventListener('mousedown', clickOutsideContent)

  return active ? (
    <>
      <motion.div
        initial={{ backgroundColor: 'rgba(0,0,0,0)' }}
        animate={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
        className="flex absolute top-0 left-0 z-10 justify-center items-center w-full h-full bg-black bg-opacity-20"
      >
        <motion.div
          ref={modalContent}
          className={`w-full min-w-sm prose ${className}`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <Container ClassName="shadow-slate-400">{children}</Container>
        </motion.div>
      </motion.div>
    </>
  ) : null
}

export default Modal
