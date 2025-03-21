import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const coursesData = [
  { img: '/course.png', title: 'Course List' },
  { img: '/pharm-1.gif', title: 'D Pharm', link: '/Dpharma' },
  { img: '/university-1.gif', title: 'Asian International University' },
  { img: '/sikkim-2.gif', title: 'Sikkim Global Technical University' },
  { img: '/university.png', title: 'Swami Vivekanand Subharti University' },
  { img: '/syllabus-1.gif', title: 'NAHEAD Syllabus' },
  { img: '/contact-1.gif', title: 'Contact Us', link: '/contact us' },
];

const Courses = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        setCanScrollLeft(scrollRef.current.scrollLeft > 0);
        setCanScrollRight(
          scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        );
      }
    };

    checkScroll();
    scrollRef.current?.addEventListener('scroll', checkScroll);
    return () => scrollRef.current?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -220 : 220,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="p-5 bg-gray-50 relative">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Explore Our Courses</h2>

      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 md:hidden z-10"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div ref={scrollRef} className="flex overflow-x-auto space-x-4 p-3 scrollbar-hide">
        {coursesData.map((course, index) => (
          <Link to={course.link || '#'} key={index}>
            <div
              className="min-w-[180px] w-[220px] h-[260px] bg-blue-100 rounded-xl shadow-lg cursor-pointer flex flex-col items-center p-5 transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-blue-200 border border-red-500"
            >
              <img src={course.img} alt={course.title} className="w-20 h-20 object-contain mb-3" />
              <p className="mt-auto text-sm font-medium text-gray-800 text-center">{course.title}</p>
            </div>
          </Link>
          
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 md:hidden"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </section>
  );
};

export default Courses;
