import styles from '@/styles/style';
import { arrowUp } from '@/public/assets';
import Image from 'next/image';
const GetStarted: React.FC = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gray-50'>Get</span>
        </p>
        <Image src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain ml-2' />
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gray-50'>Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;