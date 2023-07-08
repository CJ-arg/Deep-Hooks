import { memo } from 'react'

const Small = memo(({ value }) => {
  console.log('me volvi a generar');

  return (
    <small>{value}</small>
  )
}
)
export default Small;