import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { ArrowRight, Search, X } from 'lucide-react'
import { OrderDatails } from './order-details'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDatails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        23452sdfsdfs23
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Fernando Futila</TableCell>
      <TableCell className="font-medium">R$ 189,89</TableCell>
      <TableCell>
        <Button variant="outline">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
