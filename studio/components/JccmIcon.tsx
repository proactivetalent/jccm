import type {SVGProps} from 'react'

export function JccmIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect width="32" height="32" rx="6" fill="currentColor" />
      <path
        d="M8 23V9h6v3h4V7h6v16h-4v-7h-6v7H8Zm4-4h2v-3h-2v3Zm8 0h2v-8h-2v8Z"
        fill="white"
      />
    </svg>
  )
}
