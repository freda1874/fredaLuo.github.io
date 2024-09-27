/* eslint-disable @next/next/no-img-element */
import { FaReact, FaJava, FaSwift, FaPython } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandMongodb, TbBrandCSharp } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiMysql, SiAndroidstudio, SiOracle, SiXcode, SiAngular } from "react-icons/si";
import { SiTypescript, SiDotnet, SiPowershell, SiJavascript } from "react-icons/si";

// Custom Icons
function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function Role({ role }) {
    let startLabel =
        typeof role.start === 'string' ? role.start : role.start.label
    let startDate =
        typeof role.start === 'string' ? role.start : role.start.dateTime

    let endLabel = typeof role.end === 'string' ? role.end : role.end.label
    let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

    return (
        <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img src={role.logo} alt="" className="h-7 w-7" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.company}
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.title}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                    aria-label={`${startLabel} until ${endLabel}`}
                >
                    <time dateTime={startDate}>{startLabel}</time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={endDate}>{endLabel}</time>
                </dd>
            </dl>
        </li>
    )
}

function Resume() {
    let resume = [
        {
            company: 'Warner Bros. Discovery',
            title: 'IOS Developer Co-op',
            logo: '/images/logos/warner.svg',  // Updated path
            start: '2024',
            end: '2024'
        },
        {
            company: 'Algonquin College',
            title: 'Computer programming program',
            logo: '/images/logos/algonquin.svg',  // Updated path
            start: '2022',
            end: '2024'
        },
        {
            company: 'Zhihu',
            title: 'Business Data Analyst',
            logo: '/images/logos/zhihu.svg',  // Updated path
            start: '2019',
            end: '2022'
        },
        {
            company: 'Tencent ',
            title: 'Content Strategist',
            logo: '/images/logos/tencent.svg',
            start: '2015',
            end: '2019',
        }
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Experience</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
        </div>
    )
} export default function TechStack() {

    const iconWidth = 60;
    const iconHeight = 60;

    return (
        <div className="bg-white sm:py-2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">My Skills and Experience </h2>
            <p className="my-5 text-base text-zinc-600 dark:text-zinc-400 text-center">
                Passionate about diving into new technologies. Here is the tech stack I have worked with:
            </p>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-7 sm:gap-y-5   ">
                        <div className="flex flex-col items-center">
                            <FaJava width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Java</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaPython width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Python</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiJavascript width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Javascript</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <DiNodejs width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Node.js</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaReact width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">React</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiAngular width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Shell</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiTypescript width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Typescript</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiDotnet width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">.NET</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <TbBrandCSharp width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">C#</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaSwift width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Swift</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <BiLogoTailwindCss width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Tailwind CSS</span>
                        </div>


                        <div className="flex flex-col items-center">
                            <TbBrandMongodb width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">MongoDB</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiMysql width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">MySQL</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiOracle width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">OracleDB</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiAndroidstudio width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Android Studio</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiXcode width={iconWidth} height={iconHeight} className="h-10 w-10 object-contain" />
                            <span className="mt-2 text-sm text-gray-600">Xcode</span>
                        </div>

                    </div>
                    <Resume />
                </div>
            </div>
        </div>
    );
}