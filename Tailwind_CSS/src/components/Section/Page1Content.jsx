import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


const Page1Content = () => {
  return (
    <div className='py-2 px-12 gap-10 h-[95vh] bg-amber-300 flex items-center justify-between'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page1Content     