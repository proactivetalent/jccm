import type {DocumentBadgeComponent} from 'sanity'

type ProjectDocument = {
  status?: 'ongoing' | 'completed' | 'on-hold' | 'upcoming'
  featured?: boolean
  portfolioVisible?: boolean
}

function currentProject(props: Parameters<DocumentBadgeComponent>[0]) {
  return (props.draft ?? props.published) as ProjectDocument | null
}

export const projectStatusBadge: DocumentBadgeComponent = (props) => {
  const status = currentProject(props)?.status

  if (!status) return null

  const labels = {
    ongoing: 'Ongoing',
    completed: 'Completed',
    'on-hold': 'On hold',
    upcoming: 'Upcoming',
  } as const

  const colors = {
    ongoing: 'primary',
    completed: 'success',
    'on-hold': 'warning',
    upcoming: 'primary',
  } as const

  return {
    label: labels[status],
    title: `Project status: ${labels[status]}`,
    color: colors[status],
  }
}

projectStatusBadge.displayName = 'Project status'

export const featuredProjectBadge: DocumentBadgeComponent = (props) =>
  currentProject(props)?.featured
    ? {label: 'Featured', title: 'Shown as a featured project', color: 'success'}
    : null

featuredProjectBadge.displayName = 'Featured project'

export const hiddenProjectBadge: DocumentBadgeComponent = (props) =>
  currentProject(props)?.portfolioVisible === false
    ? {label: 'Hidden', title: 'Hidden from the website portfolio', color: 'warning'}
    : null

hiddenProjectBadge.displayName = 'Portfolio visibility'
