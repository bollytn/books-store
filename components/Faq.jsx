import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';

const title = 'Des questions ? Réponses.';

const faqs = [
    {
        question: "Qu'est-ce qu'Apple Books ?",
        answer:
            "Apple Books est une application intégrée qui vous permet de trouver, d'acheter, d'écouter et de lire des livres audio et des livres électroniques en un seul endroit. Vous pouvez parcourir des collections sélectionnées, les meilleurs livres audio et les meilleurs livres électroniques, et même obtenir des recommandations personnalisées. Si vous ne trouvez pas l'application sur votre appareil, utilisez la fonction de recherche ou recherchez Apple Books dans l'App Store.",
    },
    {
        question: 'Combien coûte Apple Books ?',
        answer:
            "L'application Apple Books est gratuite et sans abonnement. Les livres audio et les livres électroniques sont vendus à l'unité et des milliers de livres audio et électroniques gratuits sont disponibles. Vous pouvez également tester gratuitement des livres audio et des livres électroniques pendant que vous naviguez.",
    },
    {
        question: "Puis-je lire des livres audio sur mes appareils ?",
        answer: "Oui. Les livres audio peuvent être lus sur iPhone, iPad, CarPlay, Apple Watch, Mac et Apple Vision Pro. Vous pouvez même lire des livres audio sur un haut-parleur Bluetooth à partir de votre iPhone.",
    },
    {
        question: "Puis-je précommander un livre audio ou un livre électronique ?",
        answer:"Oui. Apple Books permet de trouver facilement les livres audio et électroniques les plus attendus. Recherchez le titre et sélectionnez le bouton Pré-commande pour confirmer l'achat. Le titre sera automatiquement ajouté à votre bibliothèque dès qu'il sera disponible. Pour découvrir en avant-première les nouveautés à venir, consultez la section Coming Soon de l'application."
    },
];

export const Faq = () => {
    return (
        <section className='bg-center bg-no-repeat text-gray-900 bg-gray-50 dark:bg-gray-900 dark:text-white'>
            <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32'>
                <h1 className='mb-16 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl'>{title}</h1>

                <Accordion collapseAll className='border-none'>
                    {
                        faqs.map(({ question, answer }, index) => (
                            <AccordionPanel key={index}>
                                <AccordionTitle className='text-gray-900 text-xl'>{question}</AccordionTitle>
                                <AccordionContent>
                                    <p className='mb-2 text-left text-gray-700 dark:text-gray-400'>
                                        {answer}
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                        ))
                    }
                </Accordion>
            </div>
        </section>
    );
};