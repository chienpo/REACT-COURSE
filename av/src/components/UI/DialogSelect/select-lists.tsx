interface EnumServiceItem {
    name: string; value: string; label: string
}

interface EnumServiceItems extends Array<EnumServiceItem>{}

export const carBrandList: EnumServiceItems = [
    {name: 'mazda', value: 'mazda', label: 'Mazda'}
];

export const carModelMazdaList: EnumServiceItems = [
    {name: 'mazda-323', value: 'mazda-323', label: '323'},
    {name: 'mazda-626', value: 'mazda-626', label: '626'}
];

export const engineVolumeList: EnumServiceItems = [
    {name: 'two-half', value: 'two-half', label: '2.5 л.'},
    {name: 'three-seven', value: 'three-seven', label: '3.7 л.'},
    {name: 'four-null', value: 'four-null', label: '4 л.'},
];

export const bodyTypeList: EnumServiceItems = [
    {name: 'cupe', value: 'cupe', label: 'Купе'},
    {name: 'cabrio', value: 'cabrio', label: 'Кабриолет'},
    {name: 'sedan', value: 'sedan', label: 'Седан'},
    {name: 'universal', value: 'universal', label: 'Универсал'}
];

export const engineTypeList: EnumServiceItems = [
    {name: 'gasoline', value: 'gasoline', label: 'бензин'},
    {name: 'gasoline-hybrid', value: 'gasoline-hybrid', label: 'бензин (гибрид)'},
    {name: 'gasoline-methane', value: 'gasoline-methane', label: 'бензин (метан)'},
    {name: 'gasoline-propane-butane', value: 'gasoline-propane-butane', label: 'бензин (пропан-бутан)'},
    {name: 'diesel', value: 'diesel', label: 'дизель'},
    {name: 'diesel-hybrid', value: 'diesel-hybrid', label: 'дизель (гибрид)'},
    {name: 'electro', value: 'electro', label: 'электро'}
];

export const carYearList: EnumServiceItems = [
    {name: 'car-year', value: '2010', label: '2010'},
    {name: 'car-year', value: '2011', label: '2011'},
    {name: 'car-year', value: '2012', label: '2012'},
    {name: 'car-year', value: '2013', label: '2013'},
    {name: 'car-year', value: '2014', label: '2014'},
    {name: 'car-year', value: '2015', label: '2015'},
    {name: 'car-year', value: '2016', label: '2016'},
    {name: 'car-year', value: '2017', label: '2017'},
    {name: 'car-year', value: '2018', label: '2018'},
    {name: 'car-year', value: '2019', label: '2019'},
];

export const yourCityList: EnumServiceItems = [
    {name: 'city', value: 'minsk', label: 'Минск'},
    {name: 'city', value: 'moscow', label: 'Москва'}
];
