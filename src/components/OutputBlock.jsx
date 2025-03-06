import { useSelector } from 'react-redux';
import { WiDayRain } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import { WiThunderstorm } from 'react-icons/wi';
import { WiDaySunny } from 'react-icons/wi';
import { WiCloud } from 'react-icons/wi';
import { WiCloudy } from 'react-icons/wi';
import { IconType } from '../utilities/IconType';

function Icon({ iconType }) {
  let classname = 'w-full my-5 text-[5rem]';

  switch (iconType) {
    case IconType.LIGHT_RAIN:
      return <WiDayRain className={classname} />;
    case IconType.MODERATE_RAIN:
      return <WiRain className={classname} />;
    case IconType.HEAVY_RAIN:
      return <WiThunderstorm className={classname} />;
    case IconType.LIGHT_CLOUD:
      return <WiDaySunny className={classname} />;
    case IconType.MODERATE_CLOUD:
      return <WiCloud className={classname} />;
    case IconType.HEAVY_CLOUD:
      return <WiCloudy className={classname} />;
    default:
      break;
  }
}

function OutputBlock() {
  const data = useSelector((store) => store.weather.data);
  const error = useSelector((store) => store.weather.error);
  return (
    <div className="absolute w-full h-max md:right-1/3  flex flex-col items-stretch justify-stretch md:flex-row md:mx-2 gap-x-5">
      {!error &&
        data?.map((item) => {
          return (
            <div
              className="bg-fuchsia-200/50 shadow-xl rounded-lg text-center px-5 py-2 mb-2"
              key={item.id}
            >
              <Icon iconType={item.iconType} />
              <p className="p-5 pt-0 text-xl">{item.temp}&#186;C</p>
              <hr className="border-fuchsia-800" />
              <p className="p-5 text-base">{item.time}</p>
            </div>
          );
        })}
    </div>
  );
}

export default OutputBlock;
