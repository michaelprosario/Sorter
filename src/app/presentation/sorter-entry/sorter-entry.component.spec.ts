import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISorterEntryView } from './sorter-entry-view';
import { SorterEntryComponent } from './sorter-entry.component';
import { SorterEntryPresenter } from './sorter-entry.presenter';
import { Substitute, Arg } from '@fluffy-spoon/substitute';

describe('SorterEntryComponent', () => {
  let component: SorterEntryComponent;
  let fixture: ComponentFixture<SorterEntryComponent>;  

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
      const view = Substitute.for<ISorterEntryView>();
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "123";

      // act
      let output = presenter.isNumeric(input);

      // assert
      expect(output).toBeTruthy();
    });

    it('#isNumeric should return false on dog', () => {
      const view = Substitute.for<ISorterEntryView>();
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "dog";

      // act
      let output = presenter.isNumeric(input);

      // assert
      expect(output).toBeFalsy();
    });

    it('#isNumeric should return false on empty string', () => {
      const view = Substitute.for<ISorterEntryView>();
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "";

      // act
      let output = presenter.isNumeric(input);

      // assert
      expect(output).toBeFalsy();
    });

    it('#isNumeric should return false on empty string', () => {
      const view = Substitute.for<ISorterEntryView>();
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "";

      // act
      let output = presenter.isNumeric(input);

      // assert
      expect(output).toBeFalsy();
    });

    it('#onAddEntry should work for happy case', () => {      
      const view = Substitute.for<ISorterEntryView>();
      let presenter = new SorterEntryPresenter(view);

      // arrange      
      let list: Array<number> = [];

      // act
      presenter.onAddEntry("2", list)

      // assert            
      view.didNotReceive().showErrorMessage(Arg.any());
      view.received().setNumberList(Arg.any());      


    });

    it('#onAddEntry should work for bad input', () => {
      const view = Substitute.for<ISorterEntryView>();
      let presenter = new SorterEntryPresenter(view);

      // arrange
      let input = "bad data";
      let list: Array<number> = [];

      // act
      presenter.onAddEntry(input, list)

      // assert
      view.received().showErrorMessage(Arg.any());
      view.didNotReceive().setNumberList(Arg.any());      
    });



  });
});
