import AdvanceCountUp from '@/components/elements/AdvanceCountUp';
import React from 'react';

interface CounterItem {
    icon: string;
    ending: number;
    suffix: string;
    text: string;
}

const counterItems: CounterItem[] = [
    {
        icon: 'icon-cleaning-cart',
        ending: 100,
        suffix: '+',
        text: 'Projects Done per month',
    },
    {
        icon: 'icon-costumer',
        ending: 98,
        suffix: '%',
        text: 'Trusted by happy Customer!',
    },
    {
        icon: 'icon-review',
        ending: 12,
        suffix: 'k+',
        text: 'Positive Rating in Trustpilot',
    },
    {
        icon: 'icon-work-schedule',
        ending: 35,
        suffix: 'm',
        text: 'Rating in oy local City Network',
    },
];


const Counter = () => {
    return (
        <section className="counter-two">
            <div className="container">
                <ul className="row list-unstyled">
                    {counterItems.map((item, idx) => (
                        <li key={idx} className="col-xl-3 col-lg-6 col-md-6">
                            <div className="counter-two__single">
                                <div className="counter-two__bg"></div>
                                <div className="counter-two__icon">
                                    <span className={item.icon}></span>
                                </div>
                                <div className="counter-two__content">
                                    <div className="counter-two__count-box" >
                                        <p className="odometer">
                                            <AdvanceCountUp
                                                ending={item.ending}
                                            />

                                        </p>
                                        {item.suffix === 'k+' ? (
                                            <>
                                                <span>k</span>
                                                <span>+</span>
                                            </>
                                        ) : (
                                            <span>{item.suffix}</span>
                                        )}
                                    </div>
                                    <p className="counter-two__count-text">{item.text}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Counter;