import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean | undefined): string {
    const INVALID_STATUS = status === undefined || status === null;
    if (INVALID_STATUS) {
      return 'Status indisponivel ou inválido';
    }
    return status ? 'Ativo' : 'Inativo';

  }

}
