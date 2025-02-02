import TextPressure from "./ThankYou"

export default function Footer () {
    return (
        <div className=" w-full bg-[#040404] flex flex-col items-center">
            <div className="lg:block hidden w-full" >
  <TextPressure
    text="THANK YOU"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#424242"
    strokeColor="#ff0000"
    minFontSize={10}
  />
</div>
        </div>
    )
}