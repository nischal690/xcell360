'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BookOpen,
  Brain,
  Lightbulb,
  Target,
  Sparkles,
  ChevronRight,
  Star,
  Eye,
  Telescope,
  Zap,
  Map as MapIcon,
  BarChart,
  Users,
  Compass,
  Trophy,
  ArrowUpCircle,
  MessageCircle,
  ChevronLeft
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import Logo from '@/components/commonComponents/Logo';
import ProfileIndicator from '@/components/header/ProfileIndicator';

function HomeContent() {
  const [activeTestIndex, setActiveTestIndex] = useState(0);
  const searchParams = useSearchParams();
  const [showAuthButtons, setShowAuthButtons] = useState(true);
  const [userName, setUserName] = useState('');
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [heroEmblaRef, heroEmblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setActiveModelIndex(emblaApi.selectedScrollSnap());
    };
    
    emblaApi.on('select', onSelect);
    
    // Auto-advance the carousel every 4 seconds
    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi]);
  
  // Hero carousel controls
  useEffect(() => {
    if (!heroEmblaApi) return;
    
    const onSelect = () => {
      setActiveHeroIndex(heroEmblaApi.selectedScrollSnap());
    };
    
    heroEmblaApi.on('select', onSelect);
    
    // Auto-advance the hero carousel every 5 seconds
    const autoplayInterval = setInterval(() => {
      if (heroEmblaApi.canScrollNext()) {
        heroEmblaApi.scrollNext();
      } else {
        heroEmblaApi.scrollTo(0);
      }
    }, 5000);
    
    return () => {
      heroEmblaApi.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [heroEmblaApi]);
  
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    const name = searchParams.get('name');
    if (name) {
      setShowAuthButtons(false);
      setUserName(name);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-[#876FFD]/20">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-[#19074A] hover:text-[#876FFD] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#tests"
              className="text-sm font-medium text-[#19074A] hover:text-[#876FFD] transition-colors"
            >
              Our Tests
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium text-[#19074A] hover:text-[#876FFD] transition-colors"
            >
              Benefits
            </Link>
            <Link
              href="#sample"
              className="text-sm font-medium text-[#19074A] hover:text-[#876FFD] transition-colors"
            >
              Sample Report
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-[#19074A] hover:text-[#876FFD] transition-colors"
            >
              FAQ
            </Link>
          </nav>
          {showAuthButtons ? (
            <div className="flex items-center gap-4">
              <Link href="https://xcellify.com/login">
                <Button
                  variant="outline"
                  className="hidden md:flex border-[#876FFD] text-[#876FFD] hover:bg-[#876FFD] hover:text-white transition-all duration-300"
                >
                  Log in
                </Button>
              </Link>
              <Link href="https://xcellify.com/roleselect">
                <Button className="bg-gradient-to-r from-[#876FFD] to-[#19074A] text-white hover:opacity-90 transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          ) : (
            <ProfileIndicator
              name={userName}
              role="student"
              isPrimary={true}
              isParent={false}
              image={undefined}
            />
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#876FFD]/10 to-white"></div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#876FFD]/20 to-[#19074A]/20 animate-float"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#876FFD]/20 shadow-sm">
                <Sparkles className="h-4 w-4 text-[#876FFD]" />
                <span className="text-sm font-medium text-[#19074A]">
                  Discover your superpower!
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#19074A] to-[#19074A] text-transparent bg-clip-text">
                  Find Your
                </span>{' '}
                <br />
                <span className="bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text">
                  Dream Career
                </span>{' '}
                <br />
                <span className="bg-gradient-to-r from-[#19074A] to-[#19074A] text-transparent bg-clip-text">
                  Adventure!
                </span>
              </h1>
              <p className="text-lg text-gray-700 max-w-md">
                Take our{' '}
                <span className="font-bold text-[#876FFD]">super fun quiz</span>{' '}
                and unlock your hidden talents! It's like a video game, but for
                your future! 🚀
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link href="#tests">
                  <Button className="bg-gradient-to-r from-[#876FFD] to-[#19074A] text-white hover:opacity-90 h-12 px-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Start Your Quest
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  className="border-[#876FFD] text-[#876FFD] hover:bg-[#876FFD] hover:text-white h-12 px-6 text-base rounded-xl transition-all duration-300"
                >
                  Watch Demo
                </Button> */}
              </motion.div>
            </motion.div>
            <motion.div
              className="relative h-[450px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Hero Image Carousel */}
              <div className="overflow-hidden rounded-2xl w-full h-full relative">
                <div className="embla" ref={heroEmblaRef}>
                  <div className="embla__container flex">
                    <div className="embla__slide flex-[0_0_100%] relative h-[450px]">
                      <Image
                        src="/herosection.png"
                        alt="Hero Section 1"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-2xl"
                        priority
                      />
                      <div className="absolute bottom-8 left-0 right-0 text-center bg-gradient-to-r from-[#876FFD]/80 to-[#19074A]/80 py-3 px-4 mx-4 rounded-lg backdrop-blur-sm">
                        <h3 className="text-white text-xl font-bold">Discover Your True Potential</h3>
                        <p className="text-white/80 text-sm mt-1">Stage 1: Self-Discovery & Exploration</p>
                      </div>
                    </div>
                    <div className="embla__slide flex-[0_0_100%] relative h-[450px]">
                      <Image
                        src="/hero/stage3.png"
                        alt="Hero Section 2"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-2xl"
                      />
                      <div className="absolute bottom-8 left-0 right-0 text-center bg-gradient-to-r from-[#876FFD]/80 to-[#19074A]/80 py-3 px-4 mx-4 rounded-lg backdrop-blur-sm">
                        <h3 className="text-white text-xl font-bold">Chart Your Path Forward</h3>
                        <p className="text-white/80 text-sm mt-1">Stage 2: Career Planning & Development</p>
                      </div>
                    </div>
                    <div className="embla__slide flex-[0_0_100%] relative h-[450px]">
                      <Image
                        src="/hero/stage2.png"
                        alt="Hero Section 3"
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-2xl"
                      />
                      <div className="absolute bottom-8 left-0 right-0 text-center bg-gradient-to-r from-[#876FFD]/80 to-[#19074A]/80 py-3 px-4 mx-4 rounded-lg backdrop-blur-sm">
                        <h3 className="text-white text-xl font-bold">Achieve Your Career Excellence</h3>
                        <p className="text-white/80 text-sm mt-1">Stage 3: Mastery & Leadership</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Carousel navigation dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      className={`h-2 w-2 rounded-full transition-all ${activeHeroIndex === index ? 'bg-[#876FFD] w-4' : 'bg-[#876FFD]/30'}`}
                      onClick={() => heroEmblaApi?.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <Star className="h-6 w-6 text-yellow-400" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-10 bg-white p-2 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
              >
                <Lightbulb className="h-6 w-6 text-[#876FFD]" />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-[#876FFD]/20 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { label: 'Validated By Students', value: '1000+' },
              { label: 'Career Paths', value: '100+' },
              { label: 'Success Rate', value: '95%' },
              { label: 'Satisfaction', value: '4.5/5' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tests Section */}
      <section id="tests" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#876FFD]/10 mb-4">
              <Target className="h-4 w-4 text-[#876FFD]" />
              <span className="text-sm font-medium text-[#19074A]">
                Choose Your Adventure
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text mb-4">
              Epic Quests for Every Level
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Select the perfect adventure for your grade level and unlock the
              secrets to your future career! Our scientifically designed
              assessments adapt to your educational stage.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#876FFD]/20 via-[#876FFD] to-[#19074A]/20 transform -translate-y-1/2 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  title: "Beginner's Quest",
                  grades: '6th to 8th Grade',
                  description:
                    'Discover your natural talents and interests through fun, age-appropriate activities that introduce career concepts!',
                  features: [
                    'Personality exploration',
                    'Basic skill identification',
                    'Interactive career introduction',
                  ],
                  icon: <BookOpen className="h-10 w-10 text-white" />,
                  bgColor: '#876FFD',
                  bgColorEnd: '#7057e3',
                  link: 'https://xcellify.com/assessment-test/6-8',
                },
                {
                  title: "Explorer's Journey",
                  grades: '9th to 10th Grade',
                  description:
                    'Map your strengths to potential high school subjects and explore career clusters that match your unique abilities!',
                  features: [
                    'Subject selection guidance',
                    'Career cluster exploration',
                    'Skill development roadmap',
                  ],
                  icon: <Lightbulb className="h-10 w-10 text-white" />,
                  bgColor: '#7057e3',
                  bgColorEnd: '#5e45c4',
                  link: 'https://xcellify.com/assessment-test/9-10',
                },
                {
                  title: "Hero's Path",
                  grades: '11th to 12th Grade',
                  description:
                    'Prepare for your next academic adventure with college major recommendations and career path insights!',
                  features: [
                    'College major alignment',
                    'Career path projection',
                    'Internship recommendations',
                  ],
                  icon: <Target className="h-10 w-10 text-white" />,
                  bgColor: '#5e45c4',
                  bgColorEnd: '#4a35a0',
                  link: 'https://xcellify.com/assessment-test/11-12',
                },
                {
                  title: "Legend's Destiny",
                  grades: 'Bachelors & Above',
                  description:
                    'Refine your professional direction and discover specialized career opportunities aligned with your degree!',
                  features: [
                    'Industry specialization',
                    'Advanced skill assessment',
                    'Job role matching',
                  ],
                  icon: <Brain className="h-10 w-10 text-white" />,
                  bgColor: '#4a35a0',
                  bgColorEnd: '#19074A',
                  link: 'https://xcellify.com/assessment-test/graduate',
                },
              ].map((test, index) => (
                <motion.div
                  key={index}
                  className={`rounded-2xl p-6 transition-all duration-300 hover:scale-105 shadow-lg ${
                    index === activeTestIndex ? 'ring-4 ring-[#876FFD]/50' : ''
                  }`}
                  style={{
                    background: `linear-gradient(to bottom right, ${test.bgColor}, ${test.bgColorEnd})`,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white/20 p-3 rounded-full w-fit mb-4">
                    {test.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {test.title}
                  </h3>
                  <p className="text-sm font-medium text-white mb-3">
                    {test.grades}
                  </p>
                  <p className="text-white/80 mb-4">{test.description}</p>

                  {/* Features list */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {test.features &&
                        test.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-white/90"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            <span className="text-sm text-white">
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <Link href={test.link}>
                    <Button
                      variant="secondary"
                      className="bg-white/30 hover:bg-white/50 text-white font-medium w-full group"
                    >
                      Start Quest{' '}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#876FFD]/10"></div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-[#876FFD]/10 to-[#19074A]/10 animate-float"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#876FFD]/10 mb-4">
              <Sparkles className="h-4 w-4 text-[#876FFD]" />
              <span className="text-sm font-medium text-[#19074A]">
                Unlock Special Powers
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text mb-4">
              Your Career Superpowers
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover amazing abilities you never knew you had with our magical
              career assessment!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Talent Vision',
                description:
                  'See your hidden talents and abilities like never before with our special talent-detecting technology!',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#876FFD] to-[#7057e3] flex items-center justify-center">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                ),
              },
              {
                title: 'Future Sight',
                description:
                  'Get a sneak peek into your future career possibilities and see all the amazing paths waiting for you!',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7057e3] to-[#5e45c4] flex items-center justify-center">
                    <Telescope className="h-8 w-8 text-white" />
                  </div>
                ),
              },
              {
                title: 'Skill Boost',
                description:
                  'Power up your existing skills and discover new ones you can develop to become unstoppable!',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#5e45c4] to-[#4a35a0] flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                ),
              },
              {
                title: 'Level-Up Guide',
                description:
                  'Get personalized quests and missions designed specifically for your grade level and abilities!',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4a35a0] to-[#19074A] flex items-center justify-center">
                    <MapIcon className="h-8 w-8 text-white" />
                  </div>
                ),
              },
              {
                title: 'Achievement Map',
                description:
                  'See your progress and achievements visualized in awesome, colorful charts and graphs!',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#876FFD] to-[#7057e3] flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-white" />
                  </div>
                ),
              },
              {
                title: 'Mentor Connection',
                description:
                  'Connect with career wizards who can guide you on your journey and answer all your questions!',
                icon: (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#7057e3] to-[#5e45c4] flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                ),
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-[#876FFD]/20 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text mb-3 flex items-center">
                  {benefit.title === 'Talent Vision' && (
                    <Eye className="h-5 w-5 mr-2 text-[#876FFD]" />
                  )}
                  {benefit.title === 'Future Sight' && (
                    <Telescope className="h-5 w-5 mr-2 text-[#7057e3]" />
                  )}
                  {benefit.title === 'Skill Boost' && (
                    <Zap className="h-5 w-5 mr-2 text-[#5e45c4]" />
                  )}
                  {benefit.title === 'Level-Up Guide' && (
                    <MapIcon className="h-5 w-5 mr-2 text-[#4a35a0]" />
                  )}
                  {benefit.title === 'Achievement Map' && (
                    <BarChart className="h-5 w-5 mr-2 text-[#876FFD]" />
                  )}
                  {benefit.title === 'Mentor Connection' && (
                    <Users className="h-5 w-5 mr-2 text-[#7057e3]" />
                  )}
                  {benefit.title}
                </h3>
                <p className="text-gray-700 flex">
                  <span className="mt-1 mr-2 text-[#876FFD]/70">
                    {benefit.title === 'Talent Vision' && (
                      <Sparkles className="h-4 w-4" />
                    )}
                    {benefit.title === 'Future Sight' && (
                      <Compass className="h-4 w-4" />
                    )}
                    {benefit.title === 'Skill Boost' && (
                      <Trophy className="h-4 w-4" />
                    )}
                    {benefit.title === 'Level-Up Guide' && (
                      <ArrowUpCircle className="h-4 w-4" />
                    )}
                    {benefit.title === 'Achievement Map' && (
                      <Target className="h-4 w-4" />
                    )}
                    {benefit.title === 'Mentor Connection' && (
                      <MessageCircle className="h-4 w-4" />
                    )}
                  </span>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <section id="sample" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#876FFD]/10 mb-4">
              <Sparkles className="h-4 w-4 text-[#876FFD]" />
              <span className="text-sm font-medium text-[#19074A]">
                Your Adventure Map
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text mb-4">
              Your Magical Career Report
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Unlock the secrets of your future with our enchanted career report
              that reveals your true potential!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-[#876FFD]/20 to-[#19074A]/20 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#19074A] mb-3">
                  Your Interest Constellation
                </h3>
                <p className="text-gray-700 mb-4 h-[60px]">
                  {activeModelIndex === 0 && (
                    "Discover your unique pattern of interests in our cosmic RIASEC model that maps your career universe!"
                  )}
                  {activeModelIndex === 1 && (
                    "Explore your career anchors based on Edgar Schein's model to understand your core values and motivations!"
                  )}
                  {activeModelIndex === 2 && (
                    "Uncover your multiple intelligences with Howard Gardner's theory to reveal your diverse cognitive strengths!"
                  )}
                  {activeModelIndex === 3 && (
                    "Learn your preferred learning style with the VAK theory to optimize how you absorb and process information!"
                  )}
                </p>
                <div className="relative overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {/* External image */}
                    <div className="flex-[0_0_100%] min-w-0 relative h-[250px] px-4">
                      <Image
                        src="https://i.ibb.co/qLDxRgyR/Chat-GPT-Image-Apr-25-2025-01-20-12-PM-removebg-preview.png"
                        alt="RIASEC Model"
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    {/* Career Anchor model */}
                    <div className="flex-[0_0_100%] min-w-0 relative h-[250px] px-4">
                      <Image
                        src="/models/Career Anchor - Edgar Schein.png"
                        alt="Career Anchor - Edgar Schein Model"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Multiple Intelligences model */}
                    <div className="flex-[0_0_100%] min-w-0 relative h-[250px] px-4">
                      <Image
                        src="/models/Howard Gardner's theory of Multiple Intelligences.png"
                        alt="Howard Gardner's theory of Multiple Intelligences"
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* VAK Theory model */}
                    <div className="flex-[0_0_100%] min-w-0 relative h-[250px] px-4">
                      <Image
                        src="/models/vaktheory.png"
                        alt="VAK Learning Theory"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button 
                    onClick={scrollPrev} 
                    className="p-2 rounded-full bg-[#876FFD]/10 hover:bg-[#876FFD]/20 transition-colors"
                    aria-label="Previous model"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#876FFD]" />
                  </button>
                  <div className="flex space-x-2">
                    {[0, 1, 2, 3].map((index) => (
                      <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${activeModelIndex === index ? 'bg-[#876FFD]' : 'bg-[#876FFD]/30'}`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={scrollNext} 
                    className="p-2 rounded-full bg-[#876FFD]/10 hover:bg-[#876FFD]/20 transition-colors"
                    aria-label="Next model"
                  >
                    <ChevronRight className="h-5 w-5 text-[#876FFD]" />
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#19074A]/20 to-[#876FFD]/20 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-[#19074A] mb-3">
                  Your Motivation Crystals
                </h3>
                <p className="text-gray-700 mb-4">
                  See what energizes and drives you with our magical motivation
                  crystals that power your career journey!
                </p>
                <ul className="space-y-3">
                  {[
                    { name: 'Security & Stability', color: '#876FFD' },
                    { name: 'Autonomy & Independence', color: '#7057e3' },
                    {
                      name: 'Technical/Functional Competence',
                      color: '#19074A',
                    },
                  ].map((crystal, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg bg-white/50"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: crystal.color }}
                      >
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{crystal.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-[#876FFD]/30 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      {/* <div className="absolute -inset-1 bg-gradient-to-r from-[#876FFD] to-[#19074A] rounded-full blur-sm opacity-30"></div> */}
                      <div className="relative">
                        <Image
                          src="/logos/Xcellify-Logo Motif-Favicon.png"
                          alt="Xcel360 Logo"
                          width={30}
                          height={30}
                        />
                      </div>
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text">
                      Xcel360
                    </span>
                  </div>
                  <div className="text-sm font-medium px-3 py-1 rounded-full bg-[#876FFD]/10 text-[#876FFD]">
                    Sample Career Report
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#876FFD]/5 to-[#19074A]/5 p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-[#876FFD]">
                      Adventurer Name
                    </h4>
                    <p className="font-medium">Riya Gantayat</p>
                  </div>

                  <div className="bg-gradient-to-r from-[#876FFD]/5 to-[#19074A]/5 p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-[#876FFD]">
                      Level
                    </h4>
                    <p className="font-medium">Bachelors & Above</p>
                  </div>

                  <div className="bg-gradient-to-r from-[#876FFD]/5 to-[#19074A]/5 p-3 rounded-lg">
                    <h4 className="text-sm font-medium text-[#876FFD]">
                      Quest Completed
                    </h4>
                    <p className="font-medium">24-Apr-2025</p>
                  </div>

                  <div className="pt-4 border-t border-dashed border-[#876FFD]/30">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text mb-3">
                      Your Career Destiny
                    </h3>

                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-[#876FFD]/10 to-[#19074A]/10 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-[#876FFD]" />
                          <h4 className="text-sm font-medium text-[#876FFD]">
                            Primary Career Interests
                          </h4>
                        </div>
                        <p className="font-medium">
                          Visual Arts, Design, Media and Entertainment
                        </p>
                      </div>

                      <div className="bg-gradient-to-r from-[#876FFD]/10 to-[#19074A]/10 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-[#19074A]" />
                          <h4 className="text-sm font-medium text-[#19074A]">
                            Side Career Interests
                          </h4>
                        </div>
                        <p className="font-medium">
                          Creative Technology, Writing and Communication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-dashed border-[#876FFD]/30 text-center">
                  <p className="text-sm text-gray-500 mb-3">
                    Unlock your full adventure map now!
                  </p>
                  <Link href="#tests">
                    <Button className="bg-gradient-to-r from-[#876FFD] to-[#19074A] text-white hover:opacity-90 w-full rounded-xl h-12 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Begin Your Quest
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#19074A] to-[#876FFD] rounded-2xl -z-10 opacity-70 blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-[#876FFD] to-[#19074A] rounded-2xl -z-20 opacity-50 blur-md"></div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white p-2 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <Star className="h-6 w-6 text-yellow-400" />
              </motion.div>

              <motion.div
                className="absolute -bottom-10 -left-10 bg-white p-2 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5 }}
              >
                <Lightbulb className="h-6 w-6 text-[#876FFD]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-[#19074A] to-[#876FFD]">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-4">
              <Star className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">
                Hero Stories
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Young Adventurers Say
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Hear from fellow students who have discovered their epic career
              paths!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'This test is like a video game for your future! I discovered I have artistic superpowers I never knew about!',
                name: 'Anwesha S.',
                grade: '11th Grade Student',
                stars: 5,
              },
              {
                quote:
                  "So much cooler than boring career tests! The colorful charts showed me I'm destined to be a tech wizard!",
                name: 'Aashi P.',
                grade: '10th Grade Student',
                stars: 5,
              },
              {
                quote:
                  "I was totally lost about what to do after college. This magical test revealed my hidden talents and now I'm excited!",
                name: 'Aarush S.',
                grade: "Bachelor's Student",
                stars: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-white/70 text-sm">{testimonial.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#876FFD]/10 mb-4">
              <Lightbulb className="h-4 w-4 text-[#876FFD]" />
              <span className="text-sm font-medium text-[#19074A]">
                Quest Guide
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#876FFD] to-[#19074A] text-transparent bg-clip-text mb-4">
              Adventure FAQ
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Everything you need to know about your career quest!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'How long does this epic quest take?',
                answer:
                  "Your adventure takes just 25-30 minutes to complete! It's quick, fun, and packed with discoveries about your future!",
              },
              {
                question: 'Is this magic test actually scientific?',
                answer:
                  'Behind the fun visuals is serious science based on proven career development theories and research!',
              },
              {
                question: 'When will I get my treasure map (results)?',
                answer:
                  'Your personalized career map appears instantly after completing the quest! Download it or access it online anytime!',
              },
              {
                question: 'Can my parents join my adventure?',
                answer:
                  'For younger adventurers (6th-8th grade), parent co-pilots are welcome! Older heroes should quest solo for the most accurate results.',
              },
              {
                question: 'Are there career wizards to guide me?',
                answer:
                  'Yes! We have expert career counselors who can help you interpret your magical map and plan your next adventures!',
              },
              {
                question: 'How often should I level up (retake the test)?',
                answer:
                  'Level up every 1-2 years as your character develops new skills and interests on your journey!',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="border border-[#876FFD]/20 rounded-2xl p-6 hover:border-[#876FFD] hover:shadow-lg transition-all duration-300 bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold bg-[#19074A] text-transparent bg-clip-text mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#19074A] to-[#876FFD]"></div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Epic Career Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take the first step towards discovering your hidden talents and
              unlocking your dream future!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#tests">
                <Button className="bg-white text-[#19074A] hover:bg-gray-100 h-12 px-8 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Start Your Quest
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              {/* <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 h-12 px-8 text-base rounded-xl transition-all duration-300"
              >
                Watch Demo
              </Button> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-purple-primary to-[#6C59CA] text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo
                titleColorClass="text-xl font-bold"
                bylineColorClass="text-white/70"
                subtextColorClass="text-xl font-bold"
                imageSrc="/logos/Xcellify Logo - White.png"
              />
              <p className="text-white/70">
                Your magical guide to discovering awesome career adventures and
                unlocking your hidden superpowers!
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.facebook.com/share/17tv5Rta4h/?mibextid=LQQJ4d"
                  className="text-white/70 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.x.com/xcellify"
                  className="text-white/70 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/xcellify_official/"
                  className="text-white/70 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/xcellify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    <path d="M7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Get To Know Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://xcellify.com/about-us"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://xcellify.com/carrers-page"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://xcellify.com/in-the-news"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    In The News
                  </a>
                </li>
                <li>
                  <a
                    href="https://xcellify.com/TermsOfUse#refund-policy"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://xcellify.com/contact"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">
                Become Xcellify Partner
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://partner.xcellify.com"
                    className="text-white/70 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    List Your Services
                  </a>
                </li>
                <li>
                  <a
                    href="https://xcellify.com/affiliate"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Become An Affiliate
                  </a>
                </li>
                <li>
                  <a
                    href="https://xcellify.com/advertise"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Advertise Your Products And Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:customercare@xcellify.com"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    customercare@xcellify.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-white/70"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+919019033345"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    +91 9019033345
                  </a>
                </li>
              </ul>
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-4">Join Our Newsletter</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#876FFD] flex-1"
                  />
                  <Button className="bg-[#876FFD] hover:bg-[#7057e3]">
                    Join
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/50">
              {new Date().getFullYear()} Xcel360. All rights reserved. Made
              with ❤️ for students.
            </p>
            <div className="space-x-4">
              <a
                href="https://xcellify.com/PrivacyPolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white/50"
              >
                Privacy Policy
              </a>
              <span className="text-white/50">|</span>
              <a
                href="https://xcellify.com/TermsOfUse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-white/50"
              >
                Terms Of Use
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
