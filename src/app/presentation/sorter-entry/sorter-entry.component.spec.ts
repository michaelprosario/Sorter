import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISorterEntryView } from './sorter-entry-view';
import { SorterEntryComponent } from './sorter-entry.component';
import { SorterEntryPresenter } from './sorter-entry.presenter';

describe('SorterEntryComponent', () => {
  let component: SorterEntryComponent;
  let fixture: ComponentFixture<SorterEntryComponent>;  
  let view: ISorterEntryView;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SorterEntryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('NumberSorterPresenter', () => {

    it('#isNumeric should return true on 123', () => {
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "123";

      // act
      let output = presenter.isNumeric(input);

      // assert
      expect(output).toBeTruthy();
    });

    it('#isNumeric should return false on dog', () => {
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "dog";

      // act
      let output = presenter.isNumeric(input);

      // assert
      expect(output).toBeFalsy();
    });

    it('#isNumeric should return false on empty string', () => {
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "";

      // act
      let output = presenter.isNumeric(input);

      // assert
      expect(output).toBeFalsy();
    });

    it('#isNumeric should return false on empty string', () => {
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "";

      // act
      let output = presenter.isNumeric(input);

      // assert
      expect(output).toBeFalsy();
    });

    it('#onAddEntry should work for happy case', () => {
      
      let presenter = new SorterEntryPresenter(view);

      // arrange      
      let list: Array<number> = [];

      // act
      presenter.onAddEntry("2", list)

      // assert            
    });

    it('#onAddEntry should work for bad input', () => {
      //let view: ISorterEntryView = new Mock<ISorterEntryView>();

      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "bad data";
      let list: Array<number> = [];

      //when(view.showErrorMessage("Input should be a number")).thenReturn();

      // act
      presenter.onAddEntry(input, list)

      // assert
      //verify(view.showErrorMessage("Input should be a number")).once();
    });



  });
});
