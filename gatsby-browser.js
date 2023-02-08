import { AnimatePresence } from 'framer-motion';
import React from 'react'
import GlobalLayout from './src/components/GlobalTemplate/GlobalTemplate'

export const wrapPageElement = ({ element, props }) => {
  return (
    <GlobalLayout props={props} isLayout={props?.data?.wpPage?.id !== 'cG9zdDo0Njg='} {...props}>
      <AnimatePresence exitBeforeEnter>
        {element}
      </AnimatePresence>
    </GlobalLayout>
  );
};

export const shouldUpdateScroll = ({
  prevRouterProps,
  routerProps: { location },
  getSavedScrollPosition
}) => {
  // transition duration from `layout.js` * 1000 to get time in ms
  // * 2 for exit + enter animation
  const TRANSITION_DELAY = 500
  // if it's a "normal" route
  if (location.action === "PUSH") {
      window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY)
      return false
  }
  // if we used the browser's forwards or back button
  else if (prevRouterProps) {
      const savedPosition = getSavedScrollPosition(location) || [0, 0]
        window.setTimeout(() => { debugger; window.scrollTo(...savedPosition)}, TRANSITION_DELAY )
      return false
  }
}