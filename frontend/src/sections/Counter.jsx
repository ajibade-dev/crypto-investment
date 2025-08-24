'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import FadeInMotion from './FadeinMotion';

const Counter = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const stats = [
    { end: 200, label: 'Active Traders' },
    { end: 500, label: 'Portfolios Managed', suffix: '+' },
    { end: 1000, label: 'Registered Users', suffix: '+' },
    { end: 24, label: 'Support Hours', suffix: '/7' },
  ];

  return (
    <FadeInMotion>
    <section className="bg-white py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold font-heading text-black md:text-3xl">Our Impact in Numbers</h2>
          <p className="max-w-screen-md mx-auto font-sans text-gray-500 md:text-lg">
            We’re helping everyday investors access crypto and stocks with confidence.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-0 md:divide-x"
        >
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center md:p-4">
              <div className="text-xl font-bold text-[#222ad6] sm:text-2xl md:text-3xl">
                {inView ? (
                  <CountUp
                    end={item.end}
                    duration={2}
                    suffix={item.suffix || ''}
                  />
                ) : (
                  0
                )}
              </div>
              <div className="text-sm font-semibold sm:text-base">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeInMotion>
  );
};

export default Counter;
