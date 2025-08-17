import tecnologyImage from '../../../../public/computer-category.svg'
import drinkImage from '../../../../public/drink-category.svg'
import fashionImage from '../../../../public/fashion-category.svg'
import fitnessImage from '../../../../public/fitness-category.svg'
import healtImage from '../../../../public/healt-category.svg'
import superMarketImage from '../../../../public/superMarket-category.svg'
import toolsImage from '../../../../public/tools-category.svg'

interface ICategoryProps {
    image: string
    name: string
}

export const ImagesCategoryProps: ICategoryProps[] = [
    {
        image: tecnologyImage,
        name: 'Tecnologia',
    },
    {
        image: superMarketImage,
        name: 'Supermercado',
    },
    {
        image: drinkImage,
        name: 'Bebidas',
    },
    {
        image: toolsImage,
        name: 'Ferramentas',
    },
    {
        image: healtImage,
        name: 'Saúde',
    },
    {
        image: fitnessImage,
        name: 'Esporte e Fitness',
    },
    {
        image: fashionImage,
        name: 'Moda',
    },
]
