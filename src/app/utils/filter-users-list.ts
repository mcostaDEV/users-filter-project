import { isWithinInterval } from "date-fns/isWithinInterval";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter.options.interface";
//Search name
const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;
    if (NAME_NOT_TYPPED) {
        return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    return filteredList;

}
//Search Status
const filterUsersListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;
    if (STATUS_NOT_SELECTED) {
        return usersList;
    }
    const filteredList = usersList.filter((user) => user.ativo === status);
    return filteredList;

}

//Search Data inicial e final
const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;
    if (DATES_NOT_SELECTED) {
        return usersList;
    }

    const listFiltered = usersList.filter((user) => isWithinInterval(new Date(user.DataCadastro), {
        start: startDate,
        end: endDate
    }));

    return listFiltered;

}

//Reunir todos os filtros 
const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersListByName(filterOptions.name, usersList); // Nome
    filteredList = filterUsersListByStatus(filterOptions.status, filteredList) // Status
    filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList) // Por data inicio e final

    return filteredList;
}

export { filterUsersList };