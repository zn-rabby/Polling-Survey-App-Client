import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Navbar from './../../sharedComponents/Navbar/Navbar';
import SurveyCard from './SurveyCard/SurveyCard';

const SurveysPage = () => {
    const axiosPublic = useAxiosPublic();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    const { data: survey = [] } = useQuery({
        queryKey: ['survey', selectedCategory, selectedTitle], // Include both category and title in the query key
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/show-servey?category=${selectedCategory}&title=${selectedTitle}`); // Include both parameters in the API call
            return res.data;
        },
    });

    console.log(survey);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleTitleChange = (title) => {
        setSelectedTitle(title);
    };

    const filteredSurveys = survey.filter((item) => {
        const categoryMatch = selectedCategory ? item.category === selectedCategory : true;
        const titleMatch = selectedTitle ? item.surveyTitle.toLowerCase().startsWith(selectedTitle.toLowerCase()) : true;
        return categoryMatch && titleMatch;
    });

    return (
        <div className='lg:mb-96'  >
            {/* Navbar */}
            <Navbar />

            {/* Dropdown and Input for Category and Title Filtering */}
            <div className='my-5 flex gap-10'>
                {/* category */}
                <div>
                    <label className='text-lg font-bold' htmlFor="category">Select Category: </label>
                    <select

                        id="category"
                        name="category"
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="Education">Education</option>
                        <option value="Health Care">Health Care</option>
                        <option value="Ecommerce">Ecommerce</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Customers">Customers</option>
                        <option value="Market Research">Market Research</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>

                {/* title */}
                <div>
                    <label className='text-lg font-bold' htmlFor="title">Enter Title: </label>
                    <input
                        className='border-[1px] border-gray-300 outline-[#5ae4a7]'
                        type="text"
                        id="title"
                        name="title"
                        value={selectedTitle}
                        onChange={(e) => handleTitleChange(e.target.value)}
                    />
                </div>


            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {filteredSurveys.map((item, index) => item.status==='Publish' && (
                    <SurveyCard key={index} data={item} />
                ))}
            </div>
        </div>
    );
};

export default SurveysPage;