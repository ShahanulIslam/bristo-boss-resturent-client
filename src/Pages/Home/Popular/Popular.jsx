import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const Popular = () => {
    const [menu] = useMenu();
    const popularItems = menu.filter(item => item.category === "popular")
    
    return (
        <section className='mb-12'>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mt-10'>
                <button className="btn btn-outline border-0 border-b-4
             text-yellow-700">View Full Menu</button>
            </div>
        </section>
    );
};

export default Popular;