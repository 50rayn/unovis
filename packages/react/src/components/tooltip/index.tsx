// !!! This code was automatically generated. You should not change it !!!
import React, { ForwardedRef, ReactElement, Ref, useImperativeHandle, useEffect, useRef, useState } from 'react'
import { Tooltip, TooltipConfigInterface } from '@unovis/ts'

// Utils
import { arePropsEqual } from 'src/utils/react'

// Types
import { VisComponentElement } from 'src/types/dom'

export type VisTooltipRef = {
  component?: Tooltip;
}

export type VisTooltipProps = TooltipConfigInterface & {
  ref?: Ref<VisTooltipRef>;
}

export const VisTooltipSelectors = Tooltip.selectors

// eslint-disable-next-line @typescript-eslint/naming-convention
function VisTooltipFC (props: VisTooltipProps, fRef: ForwardedRef<VisTooltipRef>): ReactElement {
  const ref = useRef<VisComponentElement<Tooltip>>(null)
  const componentRef = useRef<Tooltip | undefined>(undefined)

  // On Mount
  useEffect(() => {
    const element = (ref.current as VisComponentElement<Tooltip>)

    const c = new Tooltip(props)
    componentRef.current = c
    element.__component__ = c

    return () => {
      componentRef.current = undefined
      c.destroy()
    }
  }, [])

  // On Props Update
  useEffect(() => {
    const component = componentRef.current

    component?.setConfig(props)
  })

  useImperativeHandle(fRef, () => ({ get component () { return componentRef.current } }), [])
  return <vis-tooltip ref={ref} />
}

// We export a memoized component to avoid unnecessary re-renders
//  and define its type explicitly to help react-docgen-typescript to extract information about props
export const VisTooltip: ((props: VisTooltipProps) => JSX.Element | null) = React.memo(React.forwardRef(VisTooltipFC), arePropsEqual)
