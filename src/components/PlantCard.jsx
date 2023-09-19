const PlantCard = ({ imgURL, changeBigPlantImage, bigPlantImg }) => {
   const handleClick = () => {
     if (bigPlantImg !== imgURL.bigPlant) {
      changeBigPlantImage(imgURL.bigPlant);
     }
   };
 
   return (
     <div
       className={`border-2 rounded-xl ${
         bigPlantImg === imgURL.bigPlant
           ? "border-plant-green"
           : "border-transparent"
       } cursor-pointer max-sm:flex-1`}
       onClick={handleClick}
     >
       <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
         <img
           src={imgURL.thumbnail}
           alt='Plant colletion'
           width={127}
           height={103.34}
           className='object-contain'
         />
       </div>
     </div>
   );
 };
 
 export default PlantCard;