import jumpIcon from '../assets/img/jump.svg'

export default ({ path }) => {
  return <NuxtLink to={'/'+path}><img src={jumpIcon} alt="jump" style="height: 20px; vertical-align: middle;" /></NuxtLink>
}