import { AutoSlider } from './AutoSlider';

const title = (
    <>
        Une bibliothèque à ne pas manquer
        <br />
        Ppur s'y perdre.
    </>
);
const description = 'Parcourez notre catalogue mondial comprenant des millions de best-sellers, de nouveautés et de classiques - avec de nouveaux livres audio et électroniques ajoutés chaque semaine.';

const bestselling = [
    { src: '/assets/images/book_01.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_02.jpg', title: 'Conviction', author: 'Denise Mina' },
    { src: '/assets/images/book_03.jpg', title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: '/assets/images/book_04.jpg', title: 'Harry Poter', author: 'Liz Moore' },
    { src: '/assets/images/book_05.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: '/assets/images/book_06.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
    { src: '/assets/images/book_07.jpg', title: 'Irom Flame', author: 'Tessa Bailey' },
];

const trending = [
    { src: '/assets/images/book_08.jpg', title: 'Harry Poter', author: 'Liz Moore' },
    { src: '/assets/images/book_09.jpg', title: 'Conviction', author: 'Denise Mina' },
    { src: '/assets/images/book_10.jpg', title: 'Hillbilly Elegy', author: 'Sarah J.Maas' },
    { src: '/assets/images/book_11.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_12.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_13.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
    { src: '/assets/images/book_14.jpg', title: 'Nuclear War', author: 'Rebecca Yarros' },
];

export const Filter = () => {
    return (
        <section className='bg-center bg-no-repeat text-gray-900 dark:bg-gray-900 dark:text-white'>
            <div className='px-4 mx-auto text-center pt-24 lg:pt-32'>
                <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl'>{title}</h1>
                <p className='mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48'>{description}</p>

                <div className='flex justify-center'>
                    <ul className='flex flex-col sm:flex-row rounded-xl sm:rounded-full justify-center align-middle gap-3 text-sm bg-gray-200 p-2 l'>
                        <li className='px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 text-gray-900 hover:text-white'>Bestselling Audiobooks</li>
                        <li className='px-4 py-2 rounded-full cursor-pointer select-none bg-gray-900 text-white'>New & Trending Ebooks</li>
                        <li className='px-4 py-2 rounded-full cursor-pointer select-none hover:bg-gray-900 hover:text-white text-gray-900'>Fan-Favorite Audiobooks</li>
                    </ul>
                </div>

                <AutoSlider images={bestselling} duration={40} />
                <AutoSlider images={trending} duration={50} />
            </div>
        </section>
    );
};

export default Filter;