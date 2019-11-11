class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]

  # GET /todos
  def index
    # get current user todos
    @todos = Todo.all
    json_response(@todos)
  end

  # GET /todos/:id
  def show
    json_response(@todo)
  end

  # POST /todos
  def create
    # create todos belonging to current user
    @todo = Todo.create!(todo_params)
    json_response(@todo, :created)
  end

  # PUT /todos/:id
  def update
    @todo.update(todo_params)
    head :no_content
  end

  # DELETE /todos/:id
  def destroy
    @todo.destroy
    head :no_content
  end

  private

  # remove `created_by` from list of permitted parameters
  def todo_params
    params.required(:todo).permit(:title)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end
end
