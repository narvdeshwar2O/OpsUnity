import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const DialogDemo = ({
  children,
  title,
  open,
  onOpenChange,
  classContent,
  showCloseBtn,
  showSubmitBtn,
  closeBtnText = "Cancel",
  submitBtnText = "Save changes",
  handleSubmit,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`${classContent} bg-slate-900`} >
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {children}
          <DialogFooter>
            {showCloseBtn && (
              <DialogClose asChild>
                <Button variant="outline">{closeBtnText}</Button>
              </DialogClose>
            )}
            {showSubmitBtn && <Button type="submit">{submitBtnText}</Button>}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
