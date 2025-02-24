import { Moon, Sun } from 'lucide-react';
import { Outlet } from 'react-router';
import MatrixBackground from '~/components/matrix-bg';

export default function PageLayout() {
    return (
        <div
            id="page"
            className="bg-stone-50 fixed left-0 top-0 w-full h-full overflow-hidden whitespace-nowrap text-stone-800"
        >
            <div
                id="background"
                className="z-[1] fixed left-(--pad) top-(--pad) right-(--pad) bottom-(--pad) border border-solid border-stone-400 pointer-events-none overflow-hidden"
            >
                <MatrixBackground />
            </div>
            <header id="site-header" className='fixed z-10' style={{
                left: 'calc(var(--pad) * 2)',
                top: 'calc(var(--pad) * 2)',
            }}>
                <h1 className="text-4xl font-mono">Daniel Park</h1>
                <p className='text-lg font-mono'>Software Engineer</p>
                <nav >
                </nav>
            </header>
            <div
                id="copyright"
                className="fixed z-10 left-(--pad)"
                style={{
                    bottom: 'calc(var(--pad) * .5 - .5em)',
                }}
            >
                <p className="font-bold">© Daniel Park</p>
            </div>
            <div
                id="theme"
                className="flex flex-row fixed z-10 right-(--pad) whitespace-nowrap gap-1.5 align-middle"
                style={{ top: 'calc(var(--pad) * .5 - 1em)' }}
            >
                <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-bold shadow-sm hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300 ring-1 ring-inset ring-stone-300"
                >
                    <Sun className="-ml-0.5 size-5" />
                    Light
                </button>
                <button
                    type="button"
                    className="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-bold shadow-sm hover:bg-stone-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300 ring-1 ring-inset ring-stone-300"
                >
                    <Moon className="-ml-0.5 size-5" />
                    Dark
                </button>
            </div>
            <main
                id="page-content"
                className="z-[2] fixed left-0 top-0 w-full h-full overflow-hidden"
            >
                <div id="content-inner" className="relative min-h-screen">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
