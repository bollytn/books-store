import { HiMiniArrowRight } from 'react-icons/hi2';
import { FaBookOpen } from "react-icons/fa6";


const title = (
    <>
        Lire, écouter, découvrir.
        <br />
        Tout en une application.
    </>
);

const description = (
    <>
        Apple Books est la destination unique pour trouver, acheter et plonger dans les livres audio et électroniques. Parcourez des collections sélectionnées et obtenez des recommandations personnalisées. Partagez vos livres avec jusqu'à cinq membres de votre famille*, le tout sans abonnement ni engagement mensuel.
    </>
);

export const Hero = () => {
    return (
        <section className='bg-center bg-no-repeat text-gray-900 dark:bg-gray-900 dark:text-white'>
            <div className='px-4 mx-auto max-w-screen-xl text-center pt-24 lg:pt-24 lg:pb-16'>
                <FaBookOpen className='mx-auto text-8xl bg-orange-400 py-3 px-4 mb-5 rounded-3xl text-white dark:bg-transparent dark:border-white dark:border-2' />
                <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl'>{title}</h1>
                <p className='mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48'>{description}</p>
                <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
                    <a href='#'
                        className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-900 focus:ring-4 border border-transparent dark:hover:border-gray-500 focus:ring-blue-300 dark:focus:ring-blue-900'>
                        Commencer
                        <HiMiniArrowRight />
                    </a>
                    <a href='#'
                        className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-lg border border-gray-500 text-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 dark:text-white dark:hover:text-gray-900'>
                        En savoir plus
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Hero;