import React from 'react'

const Category = () => {
    const categoryItems = [
        {
            key: 1,
            title: "Label",
            courses: "63,476",
            bgColor: "bg-[#EBEBFF]"
        },
        {
            key: 2,
            title: "Business",
            courses: "52,822",
            bgColor: "bg-[#E1F7E3]"
        },
        {
            key: 3,
            title: "Finance & Accounting",
            courses: "33,841",
            bgColor: "bg-[#FFF2E5]"
        },
        {
            key: 4,
            title: "IT & Software",
            courses: "22,649",
            bgColor: "bg-[#FFF0F0]"
        },
        {
            key: 5,
            title: "Personal Development",
            courses: "20,126",
            bgColor: "bg-[#FFFFFF]"
        },
        {
            key: 6,
            title: "Office Productivity",
            courses: "13,932",
            bgColor: "bg-[#F5F7FA]"
        },
        {
            key: 7,
            title: "Marketing",
            courses: "12,068",
            bgColor: "bg-[#EBEBFF]"
        },
        {
            key: 8,
            title: "Photography & Video",
            courses: "6,196",
            bgColor: "bg-[#F5F7FA]"
        },
        {
            key: 9,
            title: "Lifestyle",
            courses: "2,736",
            bgColor: "bg-[#FFF2E5]"
        },
        {
            key: 10,
            title: "Design",
            courses: "2,600",
            bgColor: "bg-[#FFEEE8]"
        },
        {
            key: 11,
            title: "Health & Fitness",
            courses: "1,678",
            bgColor: "bg-[#E1F7E3]"
        },
        {
            key: 12,
            title: "Music",
            courses: "959",
            bgColor: "bg-[#FFF2E5]"
        }
    ]
    return (
        <div className='w-full'>
            <p className='text-center text-[40px] font-semibold mt-20 mb-10'>Browse top category</p>
            <div className='grid grid-cols-4 gap-4 mx-[150px]'>
                {categoryItems.map((item) => (
                    <div className={`flex items-center p-5 gap-2 ${item.bgColor} w-full h-[104px] rounded-md`}>
                        <div className='w-[64px] h-[64px] bg-white'></div>
                        <div className='flex-col items-center justify-center'>
                            <p className='text-base text-[#1D2026] font-medium'>{item.title}</p>
                            <p className='text-sm text-[#6E7485]'>{item.courses} Courses</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='h-8 mt-10'>
                <p className='text-sm text-[#4E5566] text-center'>We have more category & subcategory. <span className='font-medium text-[#FF6636]'>Browse All</span></p>
            </div>
        </div>
    )
}

export default Category