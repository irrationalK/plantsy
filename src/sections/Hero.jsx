import { useState } from "react";
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { plants, statistics } from "../constants"
import { bigPlant1 } from "../assets/images"
import PlantCard from "../components/PlantCard"

const Hero = () => {
  const [bigPlantImg, setBigPlantImg] = useState(bigPlant1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-plant-green'>
          All year collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-plant-green inline-block mt-3'>Plantsy</span> 
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover beautiful plant arrivals, nurturing care, and unique varieties for your green living space. 
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigPlantImg}
          alt='Plant colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {plants.map((image, index) => (
            <div key={index}>
              <PlantCard
                index={index}
                imgURL={image}
                changeBigPlantImage={(plant) => setBigPlantImg(plant)}
                bigPlantImg={bigPlantImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero