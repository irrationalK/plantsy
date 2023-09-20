import { plant6 } from "../assets/images";
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-plant-green'> Super </span>
          <span className='text-plant-green'>Quality </span> Plants
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Ensuring lush vibrancy and aesthetic, our carefully curated plants are meant to enhance your environment, offering unmatched quality, growth potential, and a touch of natural elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center bg-card bg-center bg-cover rounded-xl'>
        <img
          src={plant6}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
     
    </section>
  );
};

export default SuperQuality;