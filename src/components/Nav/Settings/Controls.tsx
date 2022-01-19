import Modal from 'components/Model'
import React from 'react'

const Keys: React.FC<{ t: string }> = ({ t }) => {
  return (
    <span className="text-xs py-1 px-1.5 bg-slate-200 rounded-md font-medium">
      {t}
    </span>
  )
}

const Controls: React.FC = () => {
  return (
    <div className="prose">
      <h3>Controls</h3>

      <div className="space-y-4">
        <div className="flex items-center">
          <span>New Todo:</span>
          <span className="ml-2">
            <Keys t="CTRL" /> + <Keys t="B" />
          </span>
        </div>
        <div className="flex items-center">
          <span>Lock Todos:</span>
          <span className="ml-2">
            <Keys t="CTRL" /> + <Keys t="Q" />
          </span>
        </div>
        <div className="flex items-center">
          <span>Undo Last Action:</span>
          <span className="ml-2">
            <Keys t="CTRL" /> + <Keys t="Z" />
          </span>
        </div>
        <div className="flex items-center">
          <span>Redo Last Action:</span>
          <span className="ml-2">
            <Keys t="CTRL" /> + <Keys t="Y" />
          </span>
        </div>

        <div className="flex items-center">
          <span>Delete selected Todo:</span>
          <span className="ml-2">
            <Keys t="DEL" /> , <Keys t="X" /> , <Keys t="←" />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Controls
