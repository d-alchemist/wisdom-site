import { UsersIcon, ChatBubbleLeftRightIcon, PuzzlePieceIcon, WrenchScrewdriverIcon, ShareIcon, ChartBarSquareIcon } from '@heroicons/react/24/outline';

const principles = [
	{
		id: 1,
		title: 'Invest in People',
		desc: 'people talents and ingenuity is what \nwill make us successful',
		icon: <UsersIcon />,
	},
	{
		id: 2,
		title: 'Customer Collaboration',
		desc: 'over relying on team and expert assumption',
		icon: <ChatBubbleLeftRightIcon />,
	},
	{
		id: 3,
		title: 'Question the Status Quo',
		desc: 'over processes and tools',
		icon: <ShareIcon />,
	},
	{
		id: 4,
		title: 'Hire and Develop the Best Talents',
		desc: 'over making shortcut on people development',
		icon: <PuzzlePieceIcon />,
	},
	{ id: 5, title: 'Adapt to Change', desc: 'over following a plan', icon: <WrenchScrewdriverIcon /> },
	{
		id: 6,
		title: 'Deliver Results',
		desc: 'over comprehensive documentation',
		icon: <ChartBarSquareIcon />,
	},
];

export default function OurPrinciples() {
	return (
    <div className='bg-gray-100'>
      <div className='px-6 lg:px-36 py-20'>
        <div className='mb-5'>
          <h2 className='text-yellow-500 text-3xl font-semibold'>Our Principles</h2>
          <p className='mt-3'>We operate with these core set of principles</p>
        </div>
        <ul role='list' className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {principles.map((p) => (
            <li
              key={p.id}
              className='col-span-1 divide-y divide-gray-50 rounded-lg bg-white shadow-md p-5'
            >
              <div className='flex items-center'>
                <div className='w-12'>
                  <div className='bg-yellow-500 rounded-full p-3 text-white'>{p.icon}</div>
                </div>
                <div className='ml-6'>
                  <p className='text-lg mb-1 font-medium'>{p.title}</p>
                  {/* <p className='text-sm whitespace-break-spaces'>{p.desc}</p> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
	);
}
