import React from 'react';
import slidingTextShape from "../../../public/assets/images/shapes/sliding-text-shape-1.png";
import Image from 'next/image';
import { SlidingText } from '@/types/home-one';

const SlidingTextOne: React.FC = () => {
    const textItems: SlidingText = [
        "Hosen kürzen",
        "Chemische Reinigung",
        "Lederjacken reparieren",
        "Vorhänge reinigen",
        "Anzüge reinigen",
    ];
    return (
        <section className="sliding-text-one">
            <div className="sliding-text-one__wrap">
                <ul className="sliding-text__list list-unstyled">
                    {[
                        ...textItems,
                        ...textItems,
                        ...textItems,
                        ...textItems,
                        ...textItems,
                    ].map((item: string, index: number) => (
                        <li key={index}>
                            <h2 className="sliding-text__title">
                                {item}
                                <Image src={slidingTextShape} alt='logo' />
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default SlidingTextOne;