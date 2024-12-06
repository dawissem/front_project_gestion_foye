import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  deleteItem(_t96: any,arg1: any,arg2: any,arg3: any,arg4: any) {
  throw new Error('Method not implemented.');
  }
  startEdit(_t96: any,arg1: any,arg2: any,arg3: any,arg4: any,arg5: any,arg6: any) {
  throw new Error('Method not implemented.');
  }
  addNew() {
  throw new Error('Method not implemented.');
  }


  displayedColumns = ['id', 'title', 'state', 'url', 'created_at', 'updated_at', 'actions'];
  dataSource = [
    {
      id: 1,
      title: 'Sample Title 1',
      state: 'Active',
      url: 'https://example.com/1',
      created_at: '2024-01-01',
      updated_at: '2024-01-02',
    },
    {
      id: 2,
      title: 'Sample Title 2',
      state: 'Inactive',
      url: 'https://example.com/2',
      created_at: '2024-02-01',
      updated_at: '2024-02-02',
    },
    {
      id: 3,
      title: 'Sample Title 3',
      state: 'Active',
      url: 'https://example.com/3',
      created_at: '2024-03-01',
      updated_at: '2024-03-02',
    },
    {
      id: 4,
      title: 'Sample Title 4',
      state: 'Pending',
      url: 'https://example.com/4',
      created_at: '2024-04-01',
      updated_at: '2024-04-02',
    },
    {
      id: 5,
      title: 'Sample Title 5',
      state: 'Active',
      url: 'https://example.com/5',
      created_at: '2024-05-01',
      updated_at: '2024-05-02',
    },
  ];
}
