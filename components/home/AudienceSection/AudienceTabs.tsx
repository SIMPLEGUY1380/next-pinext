import type { Tab } from "./AudienceSection";
import clsx from 'clsx'

function AudienceTabs(
    {tabs, onClick, selectedTab}
    : {tabs: Tab[], onClick: (tabName: string)=>void, selectedTab: string}) {

    return (
        <div className="h-full min-w-42.5 flex md:flex-col gap-5 px-1 py-2 items-center justify-center flex-wrap">
            {
                tabs.map((tab)=>(
                    <div onClick={()=>onClick(tab.name)} key={tab.name} className={clsx('px-6 w-max py-2 cursor-pointer', {
                        'bg-secondary-200 rounded-full border' : selectedTab == tab.name
                    })}>
                        {tab.name}
                    </div>
                ))
            }
        </div>
    )
}

export default AudienceTabs