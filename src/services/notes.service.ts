import { NotesRepository } from "../repositories/notes.repository";
import { createNoteSachemaType } from "../schema/notes";

export class NotesService {
  private noteRepository: NotesRepository;
  constructor() {
    this.noteRepository = new NotesRepository();
  }
  public async createNote(payload: createNoteSachemaType, userId: number) {
    return this.noteRepository.createNote(
      {
        title: payload.title,
        content: payload.content,
        categoryId: payload.categoryId,
      },
      userId
    );
  }

  public async getAll(skip: number, userId: number) {
    return await this.noteRepository.findAll(skip, userId);
  }

  public async findById(id: number, userId: number) {
    return await this.noteRepository.findById(id, userId);
  }
  public async update(
    id: number,
    payload: createNoteSachemaType,
    userId: number
  ) {
    return await this.noteRepository.updateNote(
      id,
      {
        title: payload.title,
        content: payload.content,
        categoryId: payload.categoryId,
      },
      userId
    );
  }

  public async delete(id: number, userId: number) {
    return await this.noteRepository.deleteNote(id, userId);
  }
}
