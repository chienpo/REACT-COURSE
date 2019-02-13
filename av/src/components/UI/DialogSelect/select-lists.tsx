interface EnumServiceItem {
    value: string; label: string
}

interface EnumServiceItems extends Array<EnumServiceItem>{}

export const carBrandList: EnumServiceItems = [
    {value: 'Мазда', label: 'Mazda'}
];

export const carModelMazdaList: EnumServiceItems = [
    {value: '3', label: '3'},
    {value: '6', label: '6'}
];

export const engineVolumeList: EnumServiceItems = [
    {value: '2.5 л.', label: '2.5 л.'},
    {value: '3.7 л.', label: '3.7 л.'},
    {value: '4 л.', label: '4 л.'},
];

export const bodyTypeList: EnumServiceItems = [
    {value: 'Купе', label: 'Купе'},
    {value: 'Кабриолет', label: 'Кабриолет'},
    {value: 'Седан', label: 'Седан'},
    {value: 'Универсал', label: 'Универсал'}
];

export const engineTypeList: EnumServiceItems = [
    {value: 'бензин', label: 'бензин'},
    {value: 'бензин (гибрид)', label: 'бензин (гибрид)'},
    {value: 'бензин (метан)', label: 'бензин (метан)'},
    {value: 'бензин (пропан-бутан)', label: 'бензин (пропан-бутан)'},
    {value: 'дизель', label: 'дизель'},
    {value: 'дизель (гибрид)', label: 'дизель (гибрид)'},
    {value: 'электро', label: 'электро'}
];

export const carYearList: EnumServiceItems = [
    {value: '2010', label: '2010'},
    {value: '2011', label: '2011'},
    {value: '2012', label: '2012'},
    {value: '2013', label: '2013'},
    {value: '2014', label: '2014'},
    {value: '2015', label: '2015'},
    {value: '2016', label: '2016'},
    {value: '2017', label: '2017'},
    {value: '2018', label: '2018'},
    {value: '2019', label: '2019'},
];

export const yourCityList: EnumServiceItems = [
    {value: 'Минск', label: 'Минск'},
    {value: 'Москва', label: 'Москва'}
];
