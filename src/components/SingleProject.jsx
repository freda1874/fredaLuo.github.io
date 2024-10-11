/* eslint-disable @next/next/no-img-element */
'use client';

import { Tab } from '@headlessui/react';
import SuperMarioMap from '../components/Mario';

const products = [
    {
        name: 'Inventory Data Dashboard ',
        link: 'https://main.d21fu26tbnffw2.amplifyapp.com/dashboard',
        images: [
            { id: 1, name: 'Dashboard', src: '/images/photos/dashboard/page1.png' },
            { id: 3, name: 'Dashboard', src: '/images/photos/dashboard/page2.png' },
            { id: 4, name: 'Dashboard', src: ' /images/photos/dashboard/page3.png' },
            { id: 5, name: 'Dashboard', src: '/images/photos/dashboard/page5.png' },
            { id: 6, name: 'Dashboard', src: ' /images/photos/dashboard/page6.png' },
            { id: 7, name: 'Dashboard', src: ' /images/photos/dashboard/page9.png' },],
        description: `<p>A Fullstack Dashboard Application built with Next.js, Redux Toolkit, and Node.js, leveraging AWS for deployment
and backend infrastructure.<br/>
The frontend, is styled with Tailwind CSS, utilizes Recharts for data visualization and MUI Data Grid for handling complex data, with Redux managing data fetching, deployed on AWS Amplify.<br/>
The backend is powered by Node.js with Prisma ORM for database management, deployed using AWS RDS for the database, EC2 for hosting, API Gateway for API management, and S3 for image storage.</p>`,
        details: [{
            name: 'Languages and Tools',
            items: ['Next.js', 'Redux', 'Node.js', 'TailwindCSS', 'Recharts', 'AWS', 'Postgres']
        }],
    },
    {
        name: 'Ecommerce Store',
        link: 'https://github.com/freda1874/commerceStore-Angular-Node.js-TypeScript-Stripe',
        images: [
            { id: 1, name: 'ecommerce', src: '/images/photos/ecommerce/home1.png' },
            { id: 3, name: 'ecommerce', src: '/images/photos/ecommerce/home-category.png ' },
            { id: 4, name: 'ecommerce', src: ' /images/photos/ecommerce/home-sort.png' },
            { id: 5, name: 'ecommerce', src: '/images/photos/ecommerce/cart.png ' },
            { id: 6, name: 'ecommerce', src: ' /images/photos/ecommerce/cartpage.png' },
            { id: 7, name: 'ecommerce', src: ' /images/photos/ecommerce/checkout.png' },],
        description: `<p>An eCommerce application built with Angular 18.20 and Node.js, leveraging core Angular features such as
Modules, Data Binding, Directives, Services, Pipes, and Lazy Loading.<br/>
 Users can browse across categories using Router and manage their shopping cart (add, update, remove items).<br/>
The app utilizes Reactive Forms for user interactions and Observables for asynchronous operations. The checkout process integrates the Stripe API for secure payments, with configurable shipping and delivery options.</p>`,
        details: [{
            name: 'Languages and Tools',
            items: ['Angular 18.20', 'Node.js', 'Angular Material', 'TypeScript', 'Stripe API', 'Tailwind CSS']
        }],
    },
    {
        name: 'Encrypted Auth Web App',
        link: 'https://user-authentication-app-x2ya.onrender.com/',
        images: [
            { id: 1, name: 'screenshot', src: '/images/photos/AuthApp/Auth1.png' },
            { id: 2, name: 'screenshot', src: '/images/photos/AuthApp/Auth10.png' },
            { id: 4, name: 'screenshot', src: '/images/photos/AuthApp/Auth5.png' },
            { id: 5, name: 'screenshot', src: '/images/photos/AuthApp/Auth4.png' },
            { id: 6, name: 'screenshot', src: '/images/photos/AuthApp/Auth9.png' },
        ],
        description: `<p> A secure web application  focusing on user authentication and session management, using JWT for secure and stateless session handling. Bcrypt is implemented for strong password hashing and encryption, and  Nodemailer for user identity verification.<br/> The backend follows RESTful API principles for efficient communication, while Tailwind CSS ensures a fully responsive user interface across all screen sizes. </p>`,
        details: [{
            name: 'Languages and Tools',
            items: ['Express.js', 'Bcrypt', 'Nodemailer', 'JWT', 'MongoDB', 'ReactJS (Vite)', 'Tailwind CSS']
        }],
    },
    {
        name: 'PeerTutor Management App',
        link: 'https://github.com/freda1874/PeerTutor-Management-System',
        images: [
            { id: 1, name: 'PeerTutor', src: '/images/photos/PeerTutor/Java1.png' },
            { id: 2, name: 'PeerTutor', src: '/images/photos/PeerTutor/Java2.png' },
        ],
        description: `<p>A PeerTutor Management Backend System built with Java EE,  offering encrypted user credentials, role-based access control, JPA for object-relational mapping, session beans for business logic, and RESTful services for backend resource exposure. Last but not least, Comprehensive JUnit tests ensure system correctness.</p>`,
        details: [{
            name: 'Languages and Tools', items: ['Java EE', 'JPA', 'JSON Serializer', 'Encryption']
        }],
    }, {
        name: 'Musician Search Android App',
        link: 'https://github.com/freda1874/Mobile-Graphical-Interface',
        images: [
            { id: 1, name: 'Musician', src: '/images/photos/Android/Android1.png' },
            { id: 2, name: 'Musician', src: '/images/photos/Android/Android2.png' },
            { id: 3, name: 'Musician', src: '/images/photos/Android/Android3.png' },
            { id: 4, name: 'Musician', src: '/images/photos/Android/Android4.png' },
        ],
        description: `<p>Allows users to search for their favorite musicians' top tracks on mobile, listen to songs, and create personalized collections that can be managed easily.</p>`,
        details: [{
            name: 'Languages and Tools', items: ['Java', 'Android Studio', 'DeerSong API', 'MySQL']
        }],
    },
    {
        name: 'Super Mario World Around Me',
        link: 'https://freda1874.github.io/MarioStyleGoogleMap/',
        component: <SuperMarioMap className="w-[800px]" />,
        description: `<p>A customized Google Map with interactive markers using JavaScript and Google Maps API.</p>`,
        details: [{ name: 'Languages and Tools', items: ['Google Maps API', 'JavaScript'] }],
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function SingleProject() {
    return (
        <div className="w-full bg-white">
            {products.map((product, index) => (
                <div key={product.name} className="mx-2 w-full px-4 py-6 sm:px-6 lg:px-8">
                    <div className="lg:-mx-36 lg:grid lg:grid-cols-2 lg:items-between lg:gap-x-8">
                        <Tab.Group as="div" className="flex flex-col-reverse">
                            <div className="mx-auto mt-6 w-full sm:block">
                                {product.component ? (
                                    product.component
                                ) : (
                                    <Tab.List className="flex overflow-x-auto gap-4">
                                        {product.images.map((image) => (
                                            <Tab
                                                key={image.id}
                                                className="relative flex h-20 w-20 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4 border border-gray-300"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className="absolute inset-0 overflow-hidden rounded-md">
                                                            <img
                                                                src={image.src}
                                                                alt={image.alt}
                                                                className={`h-full w-full object-cover ${selected ? 'scale-100' : 'scale-75'} transition-transform`}
                                                            />
                                                        </span>
                                                        <span
                                                            className={classNames(
                                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </>
                                                )}
                                            </Tab>
                                        ))}
                                    </Tab.List>
                                )}
                            </div>

                            {!product.component && (
                                <Tab.Panels className="w-full ">
                                    {product.images.map((image) => (
                                        <Tab.Panel key={image.id}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-[900px] h-full object-cover sm:rounded-lg"
                                            />
                                        </Tab.Panel>
                                    ))}
                                </Tab.Panels>
                            )}
                        </Tab.Group>

                        <div className="mt-10 w-full px-4 sm:mt-10 sm:px-0 lg:mt-4">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

                            <div className="mt-6">
                                <div
                                    className="space-y-6 text-base text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>

                            <section aria-labelledby="details-heading" className="mt-6">
                                <div className="divide-y divide-gray-200 border-t">
                                    {product.details.map((detail) => (
                                        <div key={detail.name} className="py-2">
                                            <h3 className="text-sm font-medium text-gray-900">
                                                {detail.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-700">
                                                {detail.items.join(', ')}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <form className="mt-6">
                                <div className="mt-6 flex">
                                    <button
                                        type="button"
                                        onClick={() => window.open(product.link, '_blank')}
                                        className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        View Project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {index < products.length - 1 && (
                        <hr className="my-8 border-gray-300" />
                    )}
                </div>
            ))}
        </div>
    );
}
