import Container from 'components/Container'
import React, { useRef } from 'react'

const Modal: React.FC<{ active: boolean; toggleActive: VoidFunction }> = ({
  children,
  active,
  toggleActive
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
      <div className="flex absolute top-0 left-0 z-10 justify-center items-center w-full h-full bg-black bg-opacity-20">
        <div ref={modalContent} className="w-full max-w-sm prose">
          <Container ClassName="shadow-slate-400">{children}</Container>
        </div>
      </div>
    </>
  ) : null
}

export default Modal
