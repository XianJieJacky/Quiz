import { useNavigate } from "react-router-dom"
import CategoryCard from "./components/CategoryCard"
import { HISTORY_ICON, QUIZ_CATEGORY } from "./constants"

export function LandingPage() {
  const navigate = useNavigate()

  const onCategoryClick = (category) => {
    navigate('/quiz', { state: { category } })
  }

  const historyOnClick = () => {
    navigate('/history')
  }

  return (
    <div style={{ margin: '10%', width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', alignSelf: 'center' }}>
      {
        QUIZ_CATEGORY.map((cat, index) => <CategoryCard key={index} onClick={onCategoryClick} name={cat.name} image={cat.image} />)
      }
      <CategoryCard onClick={historyOnClick} name={'Histories'} image={HISTORY_ICON} />
    </div>
  )
}