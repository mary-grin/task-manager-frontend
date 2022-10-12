import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, catchError, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';
import {BoardService} from "../../../services/board.service";
import {
  addBoard,
  appLoaded, deleteBoard,
  fetchAddBoardFailed,
  fetchAddBoardSuccess,
  fetchAllBoardFailed,
  fetchAllBoardSuccess, fetchDeleteBoardFailed, fetchDeleteBoardSuccess
} from "./boards.actions";
import {Router} from "@angular/router";

@Injectable()
export class BoardsEffects {

  loadBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appLoaded),
      switchMap(() =>
        this.boardService.getAllBoards().pipe(
          map((boards) => fetchAllBoardSuccess({boards: boards})),
          catchError((err) =>
            of(fetchAllBoardFailed({error: err, callback: () => {
                if(err.message.includes('401')) {
                  this.router.navigate(['auth']);
                }
              }
            })))
        )
      )
    )
  );

  addBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBoard),
      switchMap((action) =>
        this.boardService.addBoard(action.board).pipe(
          map((board) => fetchAddBoardSuccess({board: board})),
          catchError((err) =>
            of(fetchAddBoardFailed({error: err, callback: () => {
                if(err.message.includes('401')) {
                  this.router.navigate(['auth']);
                }
              }
            })))
        )
      )
    )
  );

  deleteBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBoard),
      switchMap((action) =>
        this.boardService.deleteBoard(action.id).pipe(
          tap(() => console.log('tap')),
          map((id) => fetchDeleteBoardSuccess({id: id})),
          catchError((err) =>
            of(fetchDeleteBoardFailed({error: err, callback: () => {
                if(err.message.includes('401')) {
                  this.router.navigate(['auth']);
                }
              }
            })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private boardService: BoardService,
    private router: Router
  ) {}
}
